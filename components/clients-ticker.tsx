'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Client {
  id: number
  name: string
  logo_url?: string
  display_order: number
}

export function ClientsTicker() {
  const [clients, setClients] = useState<Client[]>([])
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  useEffect(() => {
    async function fetchClients() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('clients')
          .select('*')
          .eq('is_active', true)
          .order('display_order')
        
        if (error) {
          console.error('Failed to fetch clients:', error)
          return
        }
        
        if (data) {
          setClients(data)
        }
      } catch (err) {
        console.error('Error fetching clients:', err)
      }
    }

    fetchClients()
  }, [])

  // Duplicate the clients array to create seamless loop
  const duplicatedClients = clients.length > 0 ? [...clients, ...clients] : []

  if (clients.length === 0) {
    return null // 고객사가 없으면 섹션을 표시하지 않음
  }

  return (
    <section className="py-16 bg-primary overflow-hidden">
      <div className="mb-8 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
          함께한 고객사
        </h3>
        <p className="text-primary-foreground/80">
          전국 300여 곳 이상의 기업과 기관이 서전텍을 신뢰합니다
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex gap-12 animate-scroll">
          {duplicatedClients.map((client, index) => {
            const hasError = imageErrors.has(client.id)
            const shouldShowImage = client.logo_url && !hasError
            
            return (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
              >
                {shouldShowImage ? (
                  <img 
                    src={client.logo_url} 
                    alt={client.name}
                    className="h-10 lg:h-12 w-auto max-w-[200px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(client.id))
                    }}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-primary-foreground/90 text-sm lg:text-base font-medium whitespace-nowrap px-4">
                    {client.name}
                  </span>
                )}
              </div>
            )
          })}
        </div>
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
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
