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
import { Plus, Trash2, Edit, LogOut, ImageIcon, Users, Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Link from 'next/link'

type Project = {
  id: string | number
  title: string
  category: string
  completion_date: string
  image_url: string
  description?: string | null
  location?: string
}

type DragState = {
  isDragging: boolean
}

type Inquiry = {
  id: string | number
  name: string
  email: string
  phone: string
  message: string
  created_at: string
  status?: string
}

type AdminDashboardProps = {
  projects: Project[]
  inquiries: Inquiry[]
  onLogout?: () => void
}

export function AdminDashboard({ projects, inquiries, onLogout }: AdminDashboardProps) {
  const [localProjects, setLocalProjects] = useState(projects)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [dragState, setDragState] = useState<DragState>({ isDragging: false })
  const router = useRouter()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    title: '',
    category: 'curtains',
    completion_date: new Date().toISOString().split('T')[0],
    image_url: '',
    description: '',
    location: '',
  })

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    } else {
      router.push('/admin/login')
    }
  }

  const processImageFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('이미지 파일만 업로드 가능합니다.')
      return
    }

    setUploading(true)
    setError('')

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `gallery/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, file)

      if (uploadError) {
        const previewUrl = URL.createObjectURL(file)
        setFormData({ ...formData, image_url: previewUrl })
        console.warn('Storage upload failed, using local preview:', uploadError)
      } else {
        const { data } = supabase.storage
          .from('project-images')
          .getPublicUrl(filePath)
        setFormData({ ...formData, image_url: data.publicUrl })
      }
    } catch (err: any) {
      const previewUrl = URL.createObjectURL(file)
      setFormData({ ...formData, image_url: previewUrl })
    } finally {
      setUploading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    await processImageFile(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragState({ isDragging: true })
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragState({ isDragging: false })
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setDragState({ isDragging: false })
    
    const file = e.dataTransfer.files?.[0]
    if (file) {
      await processImageFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      if (editingProject) {
        const { error } = await supabase
          .from('gallery_projects')
          .update({
            title: formData.title,
            category: formData.category,
            completion_date: formData.completion_date,
            image_url: formData.image_url,
            description: formData.description,
            location: formData.location,
          })
          .eq('id', editingProject.id)

        if (error) throw error

        setLocalProjects(localProjects.map(p => 
          p.id === editingProject.id ? { ...p, ...formData } : p
        ))
      } else {
        const { data, error } = await supabase
          .from('gallery_projects')
          .insert([{
            title: formData.title,
            category: formData.category,
            completion_date: formData.completion_date,
            image_url: formData.image_url,
            description: formData.description,
            location: formData.location,
          }])
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
        completion_date: new Date().toISOString().split('T')[0],
        image_url: '',
        description: '',
        location: '',
      })
    } catch (err: any) {
      setError('저장에 실패했습니다: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string | number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const { error } = await supabase
        .from('gallery_projects')
        .delete()
        .eq('id', id)

      if (error) throw error

      setLocalProjects(localProjects.filter(p => p.id !== id))
    } catch (err: any) {
      setError('삭제에 실패했습니다: ' + err.message)
    }
  }

  const openEditDialog = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      category: project.category,
      completion_date: project.completion_date,
      image_url: project.image_url,
      description: project.description || '',
      location: project.location || '',
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
                      completion_date: new Date().toISOString().split('T')[0],
                      image_url: '',
                      description: '',
                      location: '',
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
                      <Label htmlFor="completion_date">시공 완료일</Label>
                      <Input
                        id="completion_date"
                        type="date"
                        value={formData.completion_date}
                        onChange={(e) => setFormData({ ...formData, completion_date: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">위치 (선택)</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="예: 서울 강남구"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">프로젝트 이미지</Label>
                      
                      {/* Drag & Drop Area */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative border-2 border-dashed rounded-lg transition-all duration-300 ${
                          dragState.isDragging 
                            ? 'border-primary bg-primary/5 scale-105' 
                            : formData.image_url
                            ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                            : 'border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30'
                        }`}
                      >
                        {formData.image_url ? (
                          /* Image Preview */
                          <div className="relative group">
                            <img 
                              src={formData.image_url} 
                              alt="Preview" 
                              className="w-full h-64 sm:h-80 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                              <label htmlFor="image" className="cursor-pointer">
                                <div className="bg-white text-foreground px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                                  이미지 변경
                                </div>
                              </label>
                            </div>
                          </div>
                        ) : (
                          /* Upload Prompt */
                          <label 
                            htmlFor="image" 
                            className="flex flex-col items-center justify-center py-12 sm:py-16 cursor-pointer"
                          >
                            <ImageIcon className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 transition-colors ${
                              dragState.isDragging ? 'text-primary' : 'text-muted-foreground'
                            }`} />
                            <p className="text-base sm:text-lg font-medium mb-2 text-center px-4">
                              {dragState.isDragging ? '이미지를 여기에 놓으세요' : '이미지를 드래그하거나 클릭하여 업로드'}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground text-center px-4">
                              JPG, PNG, WEBP 파일 지원
                            </p>
                          </label>
                        )}
                        
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploading}
                          className="hidden"
                        />

                        {uploading && (
                          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                            <div className="flex flex-col items-center gap-3">
                              <Loader2 className="w-8 h-8 animate-spin text-primary" />
                              <p className="text-sm font-medium">업로드 중...</p>
                            </div>
                          </div>
                        )}
                      </div>
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
                      <Button type="submit" disabled={uploading || saving || !formData.image_url}>
                        {saving ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            저장 중...
                          </>
                        ) : (
                          editingProject ? '수정' : '추가'
                        )}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {localProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="aspect-[4/3] overflow-hidden relative group">
                      <img 
                        src={project.image_url || "/placeholder.svg"} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          onClick={() => openEditDialog(project)}
                          className="shadow-lg bg-white/90 hover:bg-white backdrop-blur-sm"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => handleDelete(project.id)}
                          className="shadow-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {project.category}
                        </span>
                        <span className="px-2 py-1 bg-muted rounded-full">
                          {new Date(project.completion_date).toLocaleDateString('ko-KR')}
                        </span>
                        {project.location && (
                          <span className="px-2 py-1 bg-muted rounded-full">
                            {project.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {localProjects.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                등록된 시공사례가 없습니다. 새 프로젝트를 추가해주세요.
              </div>
            )}
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>최근 문의 내역</CardTitle>
              </CardHeader>
              <CardContent>
                {inquiries.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    아직 문의 내역이 없습니다.
                  </div>
                ) : (
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
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
