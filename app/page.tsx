import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { CoreExpertise } from '@/components/core-expertise'
import { ClientsTicker } from '@/components/clients-ticker'
import { Footer } from '@/components/footer'
import { StatsSection } from '@/components/stats-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서전텍 | 프리미엄 쉐이드 솔루션 - 커튼, 블라인드, 어닝, 무대막',
  description: '30년 전문성의 서전텍. 프리미엄 커튼·블라인드, 접이식·고정식 어닝, 전동 무대막, 폴딩도어. 전국 300+ 공연장 시공 실적.',
  keywords: ['커튼', '블라인드', '어닝', '무대막', '폴딩도어', '쉐이드솔루션', '항균커튼', '전동어닝'],
  alternates: {
    canonical: 'https://seojeontec.com',
  },
}

export default async function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        
        {/* Featured Installation Photos Section */}
        <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">시공 사례</h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                전국 300여 곳의 프로젝트를 통해 검증된 서전텍의 품질과 기술력을 확인하세요.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link href="/gallery?category=stage" className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src="/installations/auditorium-stage.jpg" 
                    alt="대형 공연장 무대막 시공"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">대형 공연장 무대막 시공</p>
                </div>
              </Link>

              <Link href="/gallery?category=curtains" className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src="/installations/hospital-curtains.jpg" 
                    alt="병원 항균 커튼 설치"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">병원 항균 커튼 설치</p>
                </div>
              </Link>

              <Link href="/gallery?category=folding-doors" className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src="/installations/residential-folding-doors.jpg" 
                    alt="상업 공간 폴딩도어"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">상업 공간 폴딩도어</p>
                </div>
              </Link>

              <Link href="/gallery?category=awnings" className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src="/installations/cafe-awning-detail.jpg" 
                    alt="카페 테라스 어닝"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">카페 테라스 어닝</p>
                </div>
              </Link>

              <Link href="/gallery?category=curtains" className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src="/installations/blinds-installation.jpg" 
                    alt="주거 공간 블라인드"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">주거 공간 블라인드</p>
                </div>
              </Link>

              <Link href="/gallery?category=awnings" className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src="/installations/commercial-awning.jpg" 
                    alt="상업 시설 어닝 시스템"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">상업 시설 어닝 시스템</p>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/gallery">전체 시공사례 보기</Link>
              </Button>
            </div>
          </div>
        </section>

        <CoreExpertise />
        <ClientsTicker />
        
      </main>
      <Footer />
    </div>
  )
}
