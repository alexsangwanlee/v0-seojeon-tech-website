'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Trash2, Eye, EyeOff, GripVertical } from 'lucide-react'
import Link from 'next/link'

interface Client {
  id: number
  name: string
  display_order: number
  is_active: boolean
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [newClientName, setNewClientName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchClients()
  }, [])

  async function fetchClients() {
    const supabase = createClient()
    const { data } = await supabase
      .from('clients')
      .select('*')
      .order('display_order')
    
    if (data) {
      setClients(data)
    }
  }

  async function addClient() {
    if (!newClientName.trim()) return

    setIsLoading(true)
    const supabase = createClient()
    
    const maxOrder = Math.max(...clients.map(c => c.display_order), 0)
    
    const { error } = await supabase
      .from('clients')
      .insert({
        name: newClientName.trim(),
        display_order: maxOrder + 1,
        is_active: true
      })

    if (!error) {
      setNewClientName('')
      await fetchClients()
    }
    setIsLoading(false)
  }

  async function deleteClient(id: number) {
    if (!confirm('이 고객사를 삭제하시겠습니까?')) return

    const supabase = createClient()
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id)

    if (!error) {
      await fetchClients()
    }
  }

  async function toggleActive(id: number, currentStatus: boolean) {
    const supabase = createClient()
    const { error } = await supabase
      .from('clients')
      .update({ is_active: !currentStatus })
      .eq('id', id)

    if (!error) {
      await fetchClients()
    }
  }

  async function updateOrder(id: number, newOrder: number) {
    const supabase = createClient()
    const { error } = await supabase
      .from('clients')
      .update({ display_order: newOrder })
      .eq('id', id)

    if (!error) {
      await fetchClients()
    }
  }

  function moveUp(index: number) {
    if (index === 0) return
    const client = clients[index]
    const prevClient = clients[index - 1]
    
    updateOrder(client.id, prevClient.display_order)
    updateOrder(prevClient.id, client.display_order)
    
    setTimeout(fetchClients, 100)
  }

  function moveDown(index: number) {
    if (index === clients.length - 1) return
    const client = clients[index]
    const nextClient = clients[index + 1]
    
    updateOrder(client.id, nextClient.display_order)
    updateOrder(nextClient.id, client.display_order)
    
    setTimeout(fetchClients, 100)
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

        {/* Add new client */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">새 고객사 추가</h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={newClientName}
              onChange={(e) => setNewClientName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addClient()}
              placeholder="고객사 이름 입력 (예: 서울대학교병원)"
              className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
            />
            <Button onClick={addClient} disabled={isLoading || !newClientName.trim()}>
              <Plus className="w-4 h-4 mr-2" />
              추가
            </Button>
          </div>
        </Card>

        {/* Clients list */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">고객사 목록 ({clients.length}개)</h2>
          
          {clients.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">등록된 고객사가 없습니다</p>
          ) : (
            <div className="space-y-2">
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className={`flex items-center gap-3 p-4 border border-border rounded-md ${
                    !client.is_active ? 'opacity-50 bg-muted/20' : 'bg-card'
                  }`}
                >
                  {/* Drag handle and order controls */}
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

                  {/* Client name */}
                  <div className="flex-1 font-medium">
                    {client.name}
                  </div>

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
          <div className="bg-primary p-8 rounded-md overflow-hidden">
            <div className="flex gap-8 animate-scroll-preview">
              {clients.filter(c => c.is_active).map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 text-primary-foreground text-xl font-medium whitespace-nowrap"
                >
                  {client.name}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            활성화된 고객사만 메인 페이지에 표시됩니다
          </p>
        </Card>
      </div>

      <style jsx>{`
        @keyframes scroll-preview {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-preview {
          animation: scroll-preview 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
