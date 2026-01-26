'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CoreExpertise() {
  const cards = [
    {
      title: '커튼 & 블라인드',
      description: '병원용 항균 커튼부터 고급 암막 커튼까지. 공간의 특성에 맞는 최적의 솔루션.',
      href: '/curtains',
      image: '/products/curtains-card.jpg'
    },
    {
      title: '프리미엄 어닝',
      description: '접이식부터 고정식까지. 외부 공간을 쾌적하고 스타일리시하게 변화시킵니다.',
      href: '/awnings',
      image: '/products/awnings-card.jpg'
    },
    {
      title: 'Somfy 전동 무대막',
      description: '공연장과 강당을 위한 최고급 전동 시스템. 정숙하고 강력한 Somfy 모터.',
      href: '/stage',
      image: '/products/stage-card.jpg'
    },
    {
      title: '폴딩도어 시스템',
      description: '실내외를 연결하는 혁신적 개방감. 뛰어난 단열과 차음 성능.',
      href: '/folding-doors',
      image: '/products/folding-doors-card.jpg'
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">전문 분야</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            각 카테고리별 깊은 전문성과 프리미엄 자재로 공간의 본질적 가치를 실현합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <div className="relative h-[400px] lg:h-[480px] overflow-hidden">
                {/* Background Image */}
                <img 
                  src={card.image || "/placeholder.svg"} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/30" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-background">
                    {card.title}
                  </h3>
                  <p className="text-background/90 text-base lg:text-lg leading-relaxed mb-6 max-w-md">
                    {card.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center text-background font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm lg:text-base">자세히 보기</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" strokeWidth={2} />
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
