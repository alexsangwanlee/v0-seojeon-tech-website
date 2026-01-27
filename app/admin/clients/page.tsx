'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, Eye, EyeOff, GripVertical, ImageIcon, Upload, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface Client {
  id: number
  name: string
  logo_url?: string
  display_order: number
  is_active: boolean
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [newClientName, setNewClientName] = useState('')
  const [newClientLogo, setNewClientLogo] = useState<File | null>(null)
  const [newClientLogoPreview, setNewClientLogoPreview] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState('')

  const supabase = createClient()

  useEffect(() => {
    fetchClients()
  }, [])

  async function fetchClients() {
    setIsFetching(true)
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('display_order')
      
      if (error) throw error
      if (data) setClients(data)
    } catch (err: any) {
      setError('고객사 목록을 불러오는데 실패했습니다: ' + err.message)
    } finally {
      setIsFetching(false)
    }
  }

  async function uploadLogo(file: File): Promise<string | null> {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `client-logos/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('client-logos')
      .upload(filePath, file)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return null
    }

    const { data } = supabase.storage
      .from('client-logos')
      .getPublicUrl(filePath)

    return data.publicUrl
  }

  function handleLogoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setNewClientLogo(file)
    setNewClientLogoPreview(URL.createObjectURL(file))
  }

  async function handleLogoUploadForClient(e: React.ChangeEvent<HTMLInputElement>, clientId: number) {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    try {
      const logoUrl = await uploadLogo(file)
      if (!logoUrl) throw new Error('로고 업로드 실패')

      const { error } = await supabase
        .from('clients')
        .update({ logo_url: logoUrl })
        .eq('id', clientId)

      if (error) throw error
      
      await fetchClients()
    } catch (err: any) {
      setError('로고 업로드에 실패했습니다: ' + err.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function addClient() {
    if (!newClientName.trim()) return

    setIsLoading(true)
    setError('')

    try {
      let logoUrl = null
      if (newClientLogo) {
        logoUrl = await uploadLogo(newClientLogo)
      }

      const maxOrder = clients.length > 0 ? Math.max(...clients.map(c => c.display_order)) : 0

      const { error } = await supabase
        .from('clients')
        .insert({
          name: newClientName.trim(),
          logo_url: logoUrl,
          display_order: maxOrder + 1,
          is_active: true
        })

      if (error) throw error

      setNewClientName('')
      setNewClientLogo(null)
      setNewClientLogoPreview('')
      await fetchClients()
    } catch (err: any) {
      setError('고객사 추가에 실패했습니다: ' + err.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function deleteClient(id: number) {
    if (!confirm('이 고객사를 삭제하시겠습니까?')) return

    try {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', id)

      if (error) throw error
      await fetchClients()
    } catch (err: any) {
      setError('삭제에 실패했습니다: ' + err.message)
    }
  }

  async function toggleActive(id: number, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from('clients')
        .update({ is_active: !currentStatus })
        .eq('id', id)

      if (error) throw error
      await fetchClients()
    } catch (err: any) {
      setError('상태 변경에 실패했습니다: ' + err.message)
    }
  }

  async function updateOrder(id: number, newOrder: number) {
    try {
      const { error } = await supabase
        .from('clients')
        .update({ display_order: newOrder })
        .eq('id', id)

      if (error) throw error
    } catch (err: any) {
      setError('순서 변경에 실패했습니다: ' + err.message)
    }
  }

  async function moveUp(index: number) {
    if (index === 0) return
    const client = clients[index]
    const prevClient = clients[index - 1]
    
    await updateOrder(client.id, prevClient.display_order)
    await updateOrder(prevClient.id, client.display_order)
    await fetchClients()
  }

  async function moveDown(index: number) {
    if (index === clients.length - 1) return
    const client = clients[index]
    const nextClient = clients[index + 1]
    
    await updateOrder(client.id, nextClient.display_order)
    await updateOrder(nextClient.id, client.display_order)
    await fetchClients()
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">고객사 관리</h1>
            <p className="text-muted-foreground">메인 페이지에 표시되는 고객사 목록을 관리합니다</p>
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

        {/* Add new client */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">새 고객사 추가</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Input
                type="text"
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addClient()}
                placeholder="고객사 이름 입력 (예: 서울대학교병원)"
                className="flex-1"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Label htmlFor="new-logo" className="text-sm text-muted-foreground mb-2 block">
                  로고 이미지 (선택)
                </Label>
                <Input
                  id="new-logo"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoSelect}
                  className="cursor-pointer"
                />
              </div>
              {newClientLogoPreview && (
                <div className="w-20 h-12 bg-muted rounded flex items-center justify-center overflow-hidden">
                  <img src={newClientLogoPreview} alt="미리보기" className="max-w-full max-h-full object-contain" />
                </div>
              )}
            </div>

            <Button onClick={addClient} disabled={isLoading || !newClientName.trim()}>
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

        {/* Clients list */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">고객사 목록 ({clients.length}개)</h2>
          
          {isFetching ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              불러오는 중...
            </div>
          ) : clients.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">등록된 고객사가 없습니다</p>
          ) : (
            <div className="space-y-3">
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className={`flex items-center gap-3 p-4 border border-border rounded-md ${
                    !client.is_active ? 'opacity-50 bg-muted/20' : 'bg-card'
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
                      disabled={index === clients.length - 1}
                      className="p-1 hover:bg-muted rounded disabled:opacity-30"
                      title="아래로 이동"
                    >
                      <span className="text-xs">▼</span>
                    </button>
                  </div>

                  {/* Order number */}
                  <div className="text-sm text-muted-foreground font-mono w-8">
                    #{client.display_order}
                  </div>

                  {/* Logo */}
                  <div className="w-16 h-10 bg-muted rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                    {client.logo_url ? (
                      <img 
                        src={client.logo_url} 
                        alt={`${client.name} 로고`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Client name */}
                  <div className="flex-1 font-medium">
                    {client.name}
                  </div>

                  {/* Logo upload button */}
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleLogoUploadForClient(e, client.id)}
                      className="hidden"
                    />
                    <div className="p-2 hover:bg-muted rounded transition-colors" title="로고 변경">
                      <Upload className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </label>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleActive(client.id, client.is_active)}
                      title={client.is_active ? '숨기기' : '표시하기'}
                    >
                      {client.is_active ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteClient(client.id)}
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
            <div className="flex gap-12 items-center justify-center flex-wrap">
              {clients.filter(c => c.is_active).map((client) => (
                <div
                  key={client.id}
                  className="flex flex-col items-center gap-2"
                >
                  {client.logo_url ? (
                    <img 
                      src={client.logo_url} 
                      alt={client.name}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <div className="h-12 px-4 flex items-center justify-center bg-muted rounded">
                      <span className="text-lg font-medium text-muted-foreground">{client.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            활성화된 고객사만 메인 페이지에 표시됩니다. 로고가 없는 경우 이름이 텍스트로 표시됩니다.
          </p>
        </Card>
      </div>
    </div>
  )
}
