'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { AdminDashboard } from '@/components/admin-dashboard'
import { Loader2 } from 'lucide-react'

type Project = {
  id: string
  title: string
  category: string
  completion_date: string
  image_url: string
  description?: string | null
  location?: string
}

type Inquiry = {
  id: number
  name: string
  email: string
  phone: string
  message: string
  created_at: string
  status?: string
}

export default function AdminDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const supabase = createClient()

  useEffect(() => {
    async function checkAuthAndFetchData() {
      setIsLoading(true)
      
      // 인증 확인
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/admin/login')
        return
      }
      
      setIsAuthenticated(true)
      
      try {
        const [projectsRes, inquiriesRes] = await Promise.all([
          supabase
            .from('gallery_projects')
            .select('*')
            .order('completion_date', { ascending: false }),
          supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10)
        ])

        if (projectsRes.error) throw projectsRes.error
        if (inquiriesRes.error) throw inquiriesRes.error

        setProjects(projectsRes.data || [])
        setInquiries(inquiriesRes.data || [])
      } catch (err: any) {
        setError('데이터를 불러오는데 실패했습니다: ' + err.message)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthAndFetchData()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin mr-2" />
        <span>불러오는 중...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-primary underline"
          >
            다시 시도
          </button>
        </div>
      </div>
    )
  }

  return <AdminDashboard projects={projects} inquiries={inquiries} onLogout={handleLogout} />
}
