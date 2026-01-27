'use client'

import { useEffect, useState } from 'react'

interface ProductHeroProps {
  title: string
  subtitle: string
  description: React.ReactNode
  imagePrompt?: string
}

export function ProductHero({ title, subtitle, description }: ProductHeroProps) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              {title}
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6 text-balance">
              {subtitle}
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
