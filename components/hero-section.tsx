'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-main.jpg" 
          alt="서전텍 프리미엄 어닝 및 커튼 시스템"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-block px-4 py-2 mb-8 bg-primary/20 backdrop-blur-sm border border-background/30 text-xs tracking-[0.3em] uppercase text-background font-medium">
              Premium Shade Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-[1.05] text-background">
              공간의 빛을 디자인하는
              <br />
              <span className="text-primary-foreground">프리미엄 쉐이드 솔루션</span>
            </h1>
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <p className="text-lg md:text-xl text-background/90 mb-4 max-w-3xl leading-relaxed">
              30년 전통의 서전텍은 전동 어닝, 전동 무대막, 프리미엄 커튼 & 블라인드로
            </p>
            <p className="text-lg md:text-xl text-background mb-16 max-w-3xl leading-relaxed font-medium">
              상업 공간, 공연장, 의료 시설에 최적의 빛 환경을 제공합니다.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="text-base px-10 py-7 bg-background text-foreground hover:bg-background/90" asChild>
              <Link href="/contact">프로젝트 시작하기</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-10 py-7 bg-transparent border-background text-background hover:bg-background/10" asChild>
              <Link href="/gallery">포트폴리오 보기</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs tracking-widest text-background/70 uppercase">Scroll</div>
          <ChevronDown className="text-background/70" size={20} />
        </div>
      </div>
    </section>
  )
}
