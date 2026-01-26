'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus, Trash2, Edit, LogOut, Upload, ImageIcon, Users } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Link from 'next/link'

type Project = {
  id: string
  title: string
  category: string
  project_date: string
  image_url: string
  description: string | null
}

type Inquiry = {
  id: string
  name: string
  email: string
  phone: string
  message: string
  created_at: string
}

export function AdminDashboard({ projects, inquiries }: { projects: Project[], inquiries: Inquiry[] }) {
  const [localProjects, setLocalProjects] = useState(projects)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    title: '',
    category: 'curtains',
    project_date: new Date().toISOString().split('T')[0],
    image_url: '',
    description: '',
  })

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `gallery/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath)

      setFormData({ ...formData, image_url: data.publicUrl })
    } catch (err: any) {
      setError(err.message || '이미지 업로드에 실패했습니다.')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      if (editingProject) {
        const { error } = await supabase
          .from('gallery_projects')
          .update(formData)
          .eq('id', editingProject.id)

        if (error) throw error

        setLocalProjects(localProjects.map(p => 
          p.id === editingProject.id ? { ...p, ...formData } : p
        ))
      } else {
        const { data, error } = await supabase
          .from('gallery_projects')
          .insert([formData])
          .select()
          .single()

        if (error) throw error

        setLocalProjects([data, ...localProjects])
      }

      setIsDialogOpen(false)
      setEditingProject(null)
      setFormData({
        title: '',
        category: 'curtains',
        project_date: new Date().toISOString().split('T')[0],
        image_url: '',
        description: '',
      })
      router.refresh()
    } catch (err: any) {
      setError(err.message || '저장에 실패했습니다.')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const { error } = await supabase
        .from('gallery_projects')
        .delete()
        .eq('id', id)

      if (error) throw error

      setLocalProjects(localProjects.filter(p => p.id !== id))
      router.refresh()
    } catch (err: any) {
      setError(err.message || '삭제에 실패했습니다.')
    }
  }

  const openEditDialog = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      category: project.category,
      project_date: project.project_date,
      image_url: project.image_url,
      description: project.description || '',
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl font-bold">관리자 대시보드</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin/clients">
            <Button variant="outline" size="lg" className="w-full md:w-auto bg-transparent">
              <Users className="w-4 h-4 mr-2" />
              고객사 관리
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="projects">
          <TabsList>
            <TabsTrigger value="projects">시공사례 관리</TabsTrigger>
            <TabsTrigger value="inquiries">문의 내역</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">시공사례 ({localProjects.length}개)</h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => {
                    setEditingProject(null)
                    setFormData({
                      title: '',
                      category: 'curtains',
                      project_date: new Date().toISOString().split('T')[0],
                      image_url: '',
                      description: '',
                    })
                  }}>
                    <Plus className="w-4 h-4 mr-2" />
                    새 프로젝트 추가
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingProject ? '프로젝트 수정' : '새 프로젝트 추가'}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">프로젝트 제목</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                        placeholder="예: 서울대학교 강당 무대막 설치"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">카테고리</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="curtains">커튼/블라인드</SelectItem>
                          <SelectItem value="awnings">어닝</SelectItem>
                          <SelectItem value="stage">무대막</SelectItem>
                          <SelectItem value="folding-doors">폴딩도어</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project_date">시공 날짜</Label>
                      <Input
                        id="project_date"
                        type="date"
                        value={formData.project_date}
                        onChange={(e) => setFormData({ ...formData, project_date: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">프로젝트 이미지</Label>
                      <div className="flex gap-2">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploading}
                        />
                        {formData.image_url && (
                          <div className="flex items-center gap-2">
                            <ImageIcon className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-muted-foreground">업로드 완료</span>
                          </div>
                        )}
                      </div>
                      {uploading && <p className="text-sm text-muted-foreground">업로드 중...</p>}
                      {formData.image_url && (
                        <ImageIcon src={formData.image_url || "/placeholder.svg"} alt="Preview" className="w-full h-48 object-cover rounded mt-2" />
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">설명 (선택)</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="프로젝트에 대한 추가 설명..."
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-2 justify-end">
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        취소
                      </Button>
                      <Button type="submit" disabled={uploading || !formData.image_url}>
                        {editingProject ? '수정' : '추가'}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {localProjects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-4">
                    <ImageIcon src={project.image_url || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.category} | {project.project_date}
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(project)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(project.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>최근 문의 내역</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>이름</TableHead>
                      <TableHead>연락처</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>메시지</TableHead>
                      <TableHead>날짜</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell>{inquiry.name}</TableCell>
                        <TableCell>{inquiry.phone}</TableCell>
                        <TableCell>{inquiry.email}</TableCell>
                        <TableCell className="max-w-xs truncate">{inquiry.message}</TableCell>
                        <TableCell>{new Date(inquiry.created_at).toLocaleDateString('ko-KR')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
