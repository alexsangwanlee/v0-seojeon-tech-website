'use client'

import { Header } from '@/components/header'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { ProductFAQ } from '@/components/product-faq'
import { Footer } from '@/components/footer'
import { Shield, Flame, Droplets, Wind, Sun, Lock, Hexagon, Grip, Eye, Circle } from 'lucide-react'
import { InstallationImagePlaceholder } from '@/components/installation-image-placeholder'

const healthcareFeatures = [
  {
    icon: Shield,
    title: '99.9% 살균',
    description: '은이온 나노 코팅으로 박테리아 및 바이러스 99.9% 제거. Hygenica 기술 적용'
  },
  {
    icon: Flame,
    title: '항바이러스',
    description: '코로나19를 포함한 주요 바이러스에 대한 항바이러스 효과 검증 완료'
  },
  {
    icon: Lock,
    title: '프라이버시 보호',
    description: '의료 공간의 환자 프라이버시를 보호하는 불투명 원단 옵션'
  },
  {
    icon: Shield,
    title: '병원 안전',
    description: '의료기관 방염 및 위생 기준 충족. 감염 관리 최적화'
  }
]

const lifestyleFeatures = [
  {
    icon: Droplets,
    title: '3중 코팅 원단',
    description: '암막 커튼으로 빛 차단율 99% 이상. 침실, 홈시어터에 최적'
  },
  {
    icon: Wind,
    title: '반투명 원단',
    description: '쉬어 커튼으로 부드러운 자연광 투과. 우아한 분위기 연출'
  },
  {
    icon: Eye,
    title: '다양한 스타일',
    description: '블라인드로 롤스크린, 버티칼, 우드 블라인드 등 다양한 스타일 제공'
  }
]

export default function CurtainsPage() {
  const antibacterialFeatures = [
    {
      icon: Shield,
      title: '99.9% 살균',
      description: '은이온 나노 코팅으로 박테리아 및 바이러스 99.9% 제거. Hygenica 기술 적용'
    },
    {
      icon: Flame,
      title: '항바이러스',
      description: '코로나19를 포함한 주요 바이러스에 대한 항바이러스 효과 검증 완료'
    },
    {
      icon: Lock,
      title: '프라이버시 보호',
      description: '의료 공간의 환자 프라이버시를 보호하는 불투명 원단 옵션'
    },
    {
      icon: Shield,
      title: '병원 안전',
      description: '의료기관 방염 및 위생 기준 충족. 감염 관리 최적화'
    }
  ]

  const blindsTypes = [
    {
      icon: Hexagon,
      title: '허니콤 블라인드',
      description: '벌집 구조의 이중 셀로 단열 성능 극대화. 에너지 절감 최고 효율',
      specs: '단열 효과 최대 40%, 냉난방비 절감, 소음 차단'
    },
    {
      icon: Grip,
      title: '버티칼 블라인드',
      description: '수직 루버로 빛의 방향과 강도를 정밀하게 조절 가능',
      specs: '180도 회전 조절, 대형 창호 적합, 현대적 디자인'
    },
    {
      icon: Circle,
      title: '롤 블라인드',
      description: '간결한 디자인과 손쉬운 조작. 공간 활용도가 높음',
      specs: '전동/수동 옵션, 암막/반투명 선택, 다양한 색상'
    },
    {
      icon: Sun,
      title: '우드 블라인드',
      description: '천연 목재의 고급스러운 질감. 따뜻한 실내 분위기 연출',
      specs: '원목/인조목 선택, 내구성 우수, 클래식 스타일'
    },
    {
      icon: Eye,
      title: '콤비 블라인드',
      description: '투명/불투명 원단 이중 구조. 채광과 프라이버시를 동시에',
      specs: '듀얼 레이어 시스템, 다기능성, 모던 인테리어'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero
          title="커튼 & 블라인드"
          subtitle="공간의 품격을 높이는 맞춤형 창호 솔루션"
          description={<>병원용 항균 커튼부터 고급 암막 커튼까지,<br />공간의 특성에 맞는 최적의 솔루션을 제공합니다.</>}
          imagePrompt="Modern hospital room with elegant antibacterial curtains, clean and bright medical environment"
        />
        
        <section className="py-24 lg:py-32 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-block px-4 py-2 mb-6 border border-border text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Medical Grade
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">항균 커튼</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Hygenica 항균 기술을 적용한 의료 전문 커튼. 병원, 요양원, 클리닉을 위한 최고 수준의 위생 솔루션입니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {antibacterialFeatures.map((feature, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center border border-border">
                      <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-card border p-10">
              <h3 className="font-serif text-3xl font-bold mb-8">항균 커튼 기술 사양</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3 text-foreground/80">항균/항바이러스 성능</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>살균율:</strong> 99.9% (대장균, 포도상구균, MRSA)</li>
                    <li>• <strong>항바이러스:</strong> 코로나19 등 주요 바이러스 불활성화</li>
                    <li>• <strong>기술:</strong> Hygenica 은이온(Ag+) 나노 코팅</li>
                    <li>• <strong>지속성:</strong> 100회 이상 세탁 후 95% 성능 유지</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-foreground/80">안전 및 인증</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>방염:</strong> 소방청 방염 1급 (KFI 인증)</li>
                    <li>• <strong>프라이버시:</strong> 불투명 원단, 100% 시선 차단</li>
                    <li>• <strong>안전성:</strong> 의료기관 위생 기준 충족</li>
                    <li>• <strong>친환경:</strong> 무독성 인증, 저자극 원단</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-foreground/80">원단 및 내구성</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>소재:</strong> 폴리에스터 100%, 친환경 염색</li>
                    <li>• <strong>세탁:</strong> 40°C 이하, 중성세제 가능</li>
                    <li>• <strong>내구성:</strong> 5년 이상 항균 효과 지속</li>
                    <li>• <strong>컬러:</strong> 다양한 의료용 색상 옵션</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-foreground/80">설치 및 관리</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>시스템:</strong> 천장 매립형 레일 시스템</li>
                    <li>• <strong>탈부착:</strong> 공구 없이 간편한 분리/재설치</li>
                    <li>• <strong>맞춤제작:</strong> 모든 창호 크기 대응</li>
                    <li>• <strong>A/S:</strong> 5년 무상 품질 보증</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-block px-4 py-2 mb-6 border border-border text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Window Solutions
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">블라인드 시스템</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                기능과 디자인을 완벽하게 조화시킨 프리미엄 블라인드. 공간의 특성에 맞는 최적의 솔루션을 제공합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blindsTypes.map((blind, idx) => (
                <div key={idx} className="bg-card border p-8 hover:shadow-lg transition-shadow">
                  <div className="mb-6">
                    <blind.icon className="w-10 h-10 text-foreground/60" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{blind.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{blind.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground/80">{blind.specs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Photos Section */}
        <section className="py-24 lg:py-32 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">시공 사례</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                병원, 요양원, 주거 공간 등 다양한 환경에서의 커튼 및 블라인드 시공 사례를 확인하세요.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/hospital-curtains.jpg" 
                    alt="병원 항균 커튼 설치"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-card">
                  <p className="font-medium mb-1">병원 항균 커튼 설치</p>
                  <p className="text-sm text-muted-foreground">300병상 종합병원</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/auditorium-stage.jpg" 
                    alt="대학 강당 암막 커튼 시공"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-card">
                  <p className="font-medium mb-1">대학 강당 암막 커튼 시공</p>
                  <p className="text-sm text-muted-foreground">대형 공연장 무대막</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/products/curtains-card.jpg" 
                    alt="호텔 객실 블라인드 설치"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-card">
                  <p className="font-medium mb-1">호텔 객실 블라인드 설치</p>
                  <p className="text-sm text-muted-foreground">프리미엄 숙박 시설</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/installations/blinds-installation.jpg" 
                    alt="주거 공간 허니콤 블라인드"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-card">
                  <p className="font-medium mb-1">주거 공간 허니콤 블라인드</p>
                  <p className="text-sm text-muted-foreground">현대식 아파트</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/gallery?category=curtains" 
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                커튼 & 블라인드 시공사례 전체보기
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
              question: '항균 커튼의 항균 효과는 얼마나 지속되나요?',
              answer: '은이온 나노 코팅 기술을 사용하여 100회 이상의 세탁 후에도 항균 성능이 95% 이상 유지됩니다. 일반적인 사용 환경에서 5년 이상 효과가 지속됩니다.'
            },
            {
              question: '방염 인증은 어떤 것을 받았나요?',
              answer: '소방청 방염 성능 1급 인증(KFI)을 받았으며, 의료기관 및 다중이용시설 설치 기준을 모두 충족합니다.'
            },
            {
              question: '커튼 세탁은 어떻게 하나요?',
              answer: '항균 커튼은 40도 이하 미지근한 물에 중성세제로 세탁 가능합니다. 탈부착이 간편한 레일 시스템으로 설치되어 있어 쉽게 분리하여 세탁하실 수 있습니다.'
            },
            {
              question: '맞춤 제작이 가능한가요?',
              answer: '네, 모든 커튼과 블라인드는 고객님의 창호 크기에 맞춰 완전 맞춤 제작됩니다. 원단 색상, 패턴, 개폐 방식 등도 선택 가능합니다.'
            }
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
