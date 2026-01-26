'use client'

import React from "react"

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([formData])

      if (error) throw error

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || '문의 접수에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card border p-8 lg:p-10">
      <h2 className="font-serif text-3xl font-bold mb-8">문의하기</h2>

      {success && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">이름 *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="홍길동"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">이메일 *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">연락처 *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            placeholder="010-1234-5678"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">문의 내용 *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            placeholder="프로젝트에 대해 자세히 알려주세요. (위치, 규모, 예산, 일정 등)"
            rows={6}
          />
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? '접수 중...' : '문의 접수'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          문의 접수 시 개인정보 수집 및 이용에 동의한 것으로 간주됩니다.
        </p>
      </form>
    </div>
  )
}
