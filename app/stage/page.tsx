'use client'

import { Header } from '@/components/header'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { ProductFAQ } from '@/components/product-faq'
import { StageProjectsTicker } from '@/components/stage-projects-ticker'
import { Footer } from '@/components/footer'
import { Volume2, Gauge, Shield, Flame, Settings, Award } from 'lucide-react'

export default function StagePage() {
  const features = [
    {
      icon: Settings,
      title: '전동 모터 시스템',
      description: 'Somfy, Nice 등 프리미엄 브랜드 모터 시스템. 정숙한 작동과 강력한 하중 능력'
    },
    {
      icon: Volume2,
      title: '방음 벨벳 원단 (Soundproofing Velvet)',
      description: '480~600g/㎡ 고밀도 면 벨벳. NRC 0.6 이상 흡음 성능으로 음향 최적화'
    },
    {
      icon: Gauge,
      title: '전동 트랙 시스템 (Motorized Tracks)',
      description: '견고한 철제 레일과 정밀 베어링. 최대 500kg 하중 안정 구동'
    },
    {
      icon: Flame,
      title: '방염 인증',
      description: '국가 방염 1급 인증. 대형 공연장 안전 기준 충족'
    },
    {
      icon: Shield,
      title: '설치 & 수리 서비스 (Installation & Repair)',
      description: '신규 설치부터 기존 무대 보수, 정기 점검까지 토탈 유지보수'
    },
    {
      icon: Award,
      title: '대형 시설 실적',
      description: '전국 문예회관, 대학 강당 등 300여 곳 시공 경험'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero
          title="전동 무대막"
          subtitle="공연 예술을 완성하는 프리미엄 시스템"
          description={<>극장, 강당, 공연장을 위한 최고급 전동 무대막.<br />프리미엄 모터 시스템과 고급 벨벳의 완벽한 조화.</>}
          imagePrompt="Luxurious theater stage with elegant red velvet curtains, professional lighting, grand opera house interior"
        />
        
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6 text-balance">최고의 공연 환경을 위한 엔지니어링</h2>
              <p className="text-center text-muted-foreground mb-16 text-lg text-pretty">
                서전텍의 무대막 시스템은 단순한 커튼이 아닙니다. 
                공연 예술의 품격을 높이고, 관객에게 최상의 경험을 선사하는 정밀 기계 시스템입니다.
              </p>
              <ProductFeatures features={features} />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">전동 모터 시스템의 우수성</h2>
            <div className="max-w-4xl mx-auto bg-card p-10 rounded-lg border">
              <p className="text-center text-muted-foreground mb-8">
                서전텍은 <strong className="text-foreground">Somfy, Nice</strong> 등 세계적인 프리미엄 모터 브랜드를 취급하며, 
                현장 조건과 예산에 맞는 최적의 솔루션을 제안합니다.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                    정숙한 작동음
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    공연 중에도 방해받지 않는 저소음 설계. 40dB 이하의 조용한 구동으로 관객 몰입도 유지
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    강력한 하중 능력
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    초대형 무대막(폭 20m 이상)도 안정적으로 구동. 듀얼 모터 시스템으로 완벽한 동기화
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    정밀한 속도 제어
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    가변 속도 조절로 극적인 연출 가능. 부드러운 가감속으로 원단 보호
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                    긴 수명과 안정성
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    10년 이상 고장 없는 내구성. 전 세계 주요 극장에서 검증된 신뢰성
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 mb-6 bg-primary/10 text-primary text-xs tracking-[0.3em] uppercase font-medium">
                  Professional Service
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">설치 & 수리 서비스</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  신규 무대막 설치부터 기존 시설의 보수 및 유지보수까지, 30년 경험의 전문 기술진이 토탈 솔루션을 제공합니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card border-2 border-primary/20 p-8 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      N
                    </div>
                    <h3 className="text-2xl font-bold">신규 설치</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">
                    공연장 특성을 고려한 맞춤형 무대막 시스템 설계 및 시공
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">현장 실측 및 구조 분석</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">전동 모터 시스템 설계 (Somfy, Nice 등)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">전동 트랙 및 레일 설치</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">방음 벨벳 원단 맞춤 제작</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">제어 시스템 통합 (DMX512 연동 가능)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border-2 border-primary/20 p-8 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                      R
                    </div>
                    <h3 className="text-2xl font-bold">보수 & 유지보수</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">
                    기존 무대 시설의 최적 상태 유지를 위한 전문 관리 서비스
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong className="text-foreground">기존 무대 점검:</strong> 모터, 트랙, 원단 상태 진단</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong className="text-foreground">모터 교체:</strong> 수동막 전동화, 노후 모터 업그레이드</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong className="text-foreground">원단 교체:</strong> 퇴색/손상 커튼 교체, 방염 재인증</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong className="text-foreground">정기 점검:</strong> 연 1~2회 예방 정비 프로그램</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong className="text-foreground">긴급 출동:</strong> 공연 일정에 맞춘 24시간 대응</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/30 border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">유지보수 계약 프로그램</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      서전텍은 기존 무대막 시설을 보유한 공연장, 강당, 학교를 대상으로 연간 유지보수 계약 서비스를 제공합니다. 
                      정기 점검, 우선 출동, 부품 할인 혜택 등을 통해 무대 시설의 안정적 운영을 지원합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">프리미엄 사양</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                공연 예술을 완성하는 최고급 원단과 정밀 시스템
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-card border p-10 mb-8">
                <h3 className="font-serif text-2xl font-bold mb-6">방음 벨벳 원단 (Soundproofing Velvet)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">원단 사양</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>재질:</strong> 면 100% 또는 면/폴리 혼방</li>
                      <li>• <strong>중량:</strong> 480~600g/㎡ 고밀도 벨벳</li>
                      <li>• <strong>방염:</strong> 소방청 방염 1급 인증</li>
                      <li>• <strong>색상:</strong> 클래식 레드, 로얄 블루, 딥 그린, 블랙</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">음향 성능</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>흡음률 (NRC):</strong> 0.6 이상</li>
                      <li>• <strong>음향 반사:</strong> 최소화 설계</li>
                      <li>• <strong>효과:</strong> 공연장 음질 향상, 잔향 제어</li>
                      <li>• <strong>특성:</strong> 부드러운 드레이프, 고급 질감</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border p-10">
                <h3 className="font-serif text-2xl font-bold mb-6">전동 트랙 시스템 (Motorized Tracks)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">전동 모터</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>브랜드:</strong> Somfy, Nice 등 프리미엄 모터</li>
                      <li>• <strong>작동음:</strong> 40dB 이하 저소음</li>
                      <li>• <strong>하중:</strong> 최대 500kg 안정 구동</li>
                      <li>• <strong>속도 제어:</strong> 가변 속도, 부드러운 가감속</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">트랙 & 제어</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>레일:</strong> 견고한 철제 레일 시스템</li>
                      <li>• <strong>베어링:</strong> 정밀 볼베어링 주행 장치</li>
                      <li>• <strong>제어:</strong> 유선/무선 리모컨, DMX512 연동</li>
                      <li>• <strong>주름:</strong> 3핀치/5핀치 플리츠 가공</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-balance">주요 시공 실적</h2>
          </div>
        </section>

        <StageProjectsTicker />

        {/* Gallery CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">무대막 시공사례</h3>
              <p className="text-muted-foreground mb-8">대형 공연장, 문예회관, 대학 강당의 전문 시공 실적을 확인하세요</p>
              <a 
                href="/gallery?category=stage" 
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                무대막 시공사례 전체보기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <ProductFAQ 
          faqs={[
            {
              question: '일반 커튼과 무대막의 차이는 무엇인가요?',
              answer: '무대막은 공연장 특성에 맞춰 설계된 전문 시스템입니다. 일반 커튼 대비 3배 이상 무거운 고급 벨벳 원단, 중량 하중을 견디는 전동 모터, 흡음 성능, 방염 인증 등이 필수적으로 적용됩니다.'
            },
            {
              question: '어떤 모터 브랜드를 사용하나요?',
              answer: '서전텍은 Somfy, Nice 등 세계적인 프리미엄 모터 브랜드를 취급합니다. 현장 조건과 예산에 맞춰 최적의 모터를 선정하며, 모든 모터는 5년 이상 제조사 보증이 제공됩니다.'
            },
            {
              question: '기존 무대막을 전동화할 수 있나요?',
              answer: '네, 가능합니다. 기존 수동 무대막의 구조와 하중을 분석한 후, 적합한 전동 모터를 선정하여 전동화 시공이 가능합니다. 현장 실사 후 정확한 견적을 드립니다.'
            },
            {
              question: '무대막 유지보수는 어떻게 하나요?',
              answer: '연 1회 정기 점검을 권장하며, 레일 청소, 모터 작동 점검, 원단 상태 확인 등을 진행합니다. 서전텍 A/S팀이 정기 방문 서비스를 제공합니다.'
            }
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
