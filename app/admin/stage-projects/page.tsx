'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, Eye, EyeOff, GripVertical, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface StageProject {
  id: string
  facility_name: string
  location: string
  display_order: number
  is_active: boolean
}

export default function AdminStageProjectsPage() {
  const [projects, setProjects] = useState<StageProject[]>([])
  const [newFacilityName, setNewFacilityName] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const supabase = createClient()

  useEffect(() => {
    async function checkAuthAndFetchData() {
      setIsFetching(true)
      
      // 인증 확인
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/admin/login')
        return
      }
      
      setIsAuthenticated(true)
      await fetchProjects()
    }

    checkAuthAndFetchData()
  }, [router])

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('stage_projects')
        .select('*')
        .order('display_order')
      
      if (error) throw error
      if (data) setProjects(data)
    } catch (err: any) {
      setError('무대막 시공 실적 목록을 불러오는데 실패했습니다: ' + err.message)
    } finally {
      setIsFetching(false)
    }
  }

  async function addProject() {
    if (!newFacilityName.trim() || !newLocation.trim()) {
      setError('시설명과 위치를 모두 입력해주세요.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const maxOrder = projects.length > 0 ? Math.max(...projects.map(p => p.display_order)) : 0

      const { error } = await supabase
        .from('stage_projects')
        .insert({
          facility_name: newFacilityName.trim(),
          location: newLocation.trim(),
          display_order: maxOrder + 1,
          is_active: true
        })

      if (error) {
        throw new Error(`데이터베이스 저장 실패: ${error.message}`)
      }

      setNewFacilityName('')
      setNewLocation('')
      await fetchProjects()
      setError('')
    } catch (err: any) {
      console.error('Add project error:', err)
      setError(err.message || '무대막 시공 실적 추가에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  async function deleteProject(id: string) {
    if (!confirm('이 시공 실적을 삭제하시겠습니까?')) return

    try {
      const { error } = await supabase
        .from('stage_projects')
        .delete()
        .eq('id', id)

      if (error) throw error
      await fetchProjects()
    } catch (err: any) {
      setError('삭제에 실패했습니다: ' + err.message)
    }
  }

  async function toggleActive(id: string, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from('stage_projects')
        .update({ is_active: !currentStatus })
        .eq('id', id)

      if (error) throw error
      await fetchProjects()
    } catch (err: any) {
      setError('상태 변경에 실패했습니다: ' + err.message)
    }
  }

  async function updateOrder(id: string, newOrder: number) {
    try {
      const { error } = await supabase
        .from('stage_projects')
        .update({ display_order: newOrder })
        .eq('id', id)

      if (error) throw error
    } catch (err: any) {
      setError('순서 변경에 실패했습니다: ' + err.message)
    }
  }

  async function moveUp(index: number) {
    if (index === 0) return
    const project = projects[index]
    const prevProject = projects[index - 1]
    
    await updateOrder(project.id, prevProject.display_order)
    await updateOrder(prevProject.id, project.display_order)
    await fetchProjects()
  }

  async function moveDown(index: number) {
    if (index === projects.length - 1) return
    const project = projects[index]
    const nextProject = projects[index + 1]
    
    await updateOrder(project.id, nextProject.display_order)
    await updateOrder(nextProject.id, project.display_order)
    await fetchProjects()
  }

  async function updateProject(id: string, field: 'facility_name' | 'location', value: string) {
    try {
      const { error } = await supabase
        .from('stage_projects')
        .update({ [field]: value.trim() })
        .eq('id', id)

      if (error) throw error
      await fetchProjects()
    } catch (err: any) {
      setError('수정에 실패했습니다: ' + err.message)
    }
  }

  if (isFetching || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin mr-2" />
        <span>불러오는 중...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">무대막 시공 실적 관리</h1>
            <p className="text-muted-foreground">무대막 페이지에 표시되는 주요 시공 실적을 관리합니다</p>
          </div>
          <Link href="/admin/dashboard">
            <Button variant="outline">대시보드로 돌아가기</Button>
          </Link>
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">
            {error}
            <button onClick={() => setError('')} className="ml-2 underline">닫기</button>
          </div>
        )}

        {/* Add new project */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">새 시공 실적 추가</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="facility-name">시설명</Label>
                <Input
                  id="facility-name"
                  type="text"
                  value={newFacilityName}
                  onChange={(e) => setNewFacilityName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addProject()}
                  placeholder="예: 세종문화회관"
                />
              </div>
              <div>
                <Label htmlFor="location">위치</Label>
                <Input
                  id="location"
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addProject()}
                  placeholder="예: 서울"
                />
              </div>
            </div>

            <Button onClick={addProject} disabled={isLoading || !newFacilityName.trim() || !newLocation.trim()}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  추가 중...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  추가
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Projects list */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">시공 실적 목록 ({projects.length}개)</h2>
          
          {isFetching ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              불러오는 중...
            </div>
          ) : projects.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">등록된 시공 실적이 없습니다</p>
          ) : (
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex items-center gap-3 p-4 border border-border rounded-md ${
                    !project.is_active ? 'opacity-50 bg-muted/20' : 'bg-card'
                  }`}
                >
                  {/* Order controls */}
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      className="p-1 hover:bg-muted rounded disabled:opacity-30"
                      title="위로 이동"
                    >
                      <span className="text-xs">▲</span>
                    </button>
                    <GripVertical className="w-4 h-4 text-muted-foreground" />
                    <button
                      onClick={() => moveDown(index)}
                      disabled={index === projects.length - 1}
                      className="p-1 hover:bg-muted rounded disabled:opacity-30"
                      title="아래로 이동"
                    >
                      <span className="text-xs">▼</span>
                    </button>
                  </div>

                  {/* Order number */}
                  <div className="text-sm text-muted-foreground font-mono w-8">
                    #{project.display_order}
                  </div>

                  {/* Facility name */}
                  <div className="flex-1">
                    <Input
                      value={project.facility_name}
                      onChange={(e) => updateProject(project.id, 'facility_name', e.target.value)}
                      onBlur={(e) => updateProject(project.id, 'facility_name', e.target.value)}
                      className="font-medium"
                    />
                  </div>

                  {/* Location */}
                  <div className="w-32">
                    <Input
                      value={project.location}
                      onChange={(e) => updateProject(project.id, 'location', e.target.value)}
                      onBlur={(e) => updateProject(project.id, 'location', e.target.value)}
                      className="text-sm"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleActive(project.id, project.is_active)}
                      title={project.is_active ? '숨기기' : '표시하기'}
                    >
                      {project.is_active ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteProject(project.id)}
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Preview section */}
        <Card className="p-6 mt-8 bg-muted/30">
          <h2 className="text-xl font-bold mb-4">미리보기</h2>
          <div className="bg-white border rounded-md p-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {projects.filter(p => p.is_active).map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 text-foreground/70 text-lg font-medium whitespace-nowrap"
                >
                  <span className="font-semibold text-foreground">{project.facility_name}</span>
                  <span className="text-foreground/50 ml-2">({project.location})</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            활성화된 시공 실적만 무대막 페이지에 표시됩니다.
          </p>
        </Card>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 50s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
