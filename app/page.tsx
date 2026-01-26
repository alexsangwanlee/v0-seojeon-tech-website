import type { Metadata } from 'next'
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
    canonical: 'https://seojeontech.com',
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
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">시공 사례</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                전국 300여 곳의 프로젝트를 통해 검증된 서전텍의 품질과 기술력을 확인하세요.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/auditorium-stage.jpg" 
                    alt="대형 공연장 무대막 시공"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">대형 공연장 무대막 시공</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/hospital-curtains.jpg" 
                    alt="병원 항균 커튼 설치"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">병원 항균 커튼 설치</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/residential-folding-doors.jpg" 
                    alt="상업 공간 폴딩도어"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">상업 공간 폴딩도어</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/cafe-awning-detail.jpg" 
                    alt="카페 테라스 어닝"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">카페 테라스 어닝</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/blinds-installation.jpg" 
                    alt="주거 공간 블라인드"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">주거 공간 블라인드</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/commercial-awning.jpg" 
                    alt="상업 시설 어닝 시스템"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium">상업 시설 어닝 시스템</p>
                </div>
              </div>
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
