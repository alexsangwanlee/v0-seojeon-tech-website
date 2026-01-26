'use client'

export function TrustPartners() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Large Somfy Logo and Badge Display */}
          <div className="text-center mb-16">
            <div className="inline-block bg-background px-12 py-8 border-4 border-primary-foreground/20 mb-8">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-3 tracking-tight">
                SOMFY
              </div>
              <div className="text-sm lg:text-base text-muted-foreground tracking-[0.4em] uppercase">
                Official Authorized Partner
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              세계 1위 전동 모터 브랜드와 함께합니다
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              프랑스 Somfy사의 공식 인증 파트너로서, 정품 보증과 전문 기술 지원을 제공합니다.
            </p>
          </div>

          {/* Partnership Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-3">20+</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wider">년 전문 경력</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-3">5년</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wider">정품 무상 보증</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-3">300+</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wider">시공 실적</div>
            </div>
          </div>

          {/* Installation Photo */}
          <div className="mt-12 border-4 border-primary-foreground/20 overflow-hidden">
            <img 
              src="/somfy-partnership.jpg" 
              alt="Somfy 프로페셔널 모터 시스템"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
