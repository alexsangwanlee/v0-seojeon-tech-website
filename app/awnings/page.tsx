'use client'

import { Header } from '@/components/header'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { ProductFAQ } from '@/components/product-faq'
import { Footer } from '@/components/footer'
import { Cog, Sun, Wind, Smartphone, Building, Umbrella } from 'lucide-react'

export default function AwningsPage() {
  const retractableFeatures = [
    {
      icon: Cog,
      title: '내구성 있는 암 메커니즘',
      description: '국내산 고강도 알루미늄 암으로 최대 6m 폭까지 안정적 지지'
    },
    {
      icon: Sun,
      title: '프리미엄 원단',
      description: 'Dickson, Recasens, Letom 원단 선택 가능. UV 차단율 95~99%, 예산별 맞춤 선택'
    },
    {
      icon: Smartphone,
      title: '스마트 제어',
      description: '무선 리모컨 및 스마트폰 앱 연동. 풍속/일조 센서 옵션'
    }
  ]

  const fixedFeatures = [
    {
      icon: Building,
      title: '구조적 안정성',
      description: '강화 철골 프레임으로 강풍과 적설에도 안전한 설계'
    },
    {
      icon: Umbrella,
      title: '전천후 보호',
      description: '방수 코팅 원단으로 비와 눈을 완벽하게 차단'
    },
    {
      icon: Wind,
      title: '브랜딩 효과',
      description: '상호명, 로고 인쇄로 효과적인 매장 홍보 가능'
    }
  ]

  const faqs = [
    {
      question: '어닝 설치 시 건물 외벽에 손상이 가나요?',
      answer: '전문 시공팀이 건물 구조를 면밀히 분석한 후, 하중을 분산시키는 브라켓을 사용하여 안전하게 설치합니다. 외벽 손상을 최소화하며, 방수 처리도 함께 진행됩니다.'
    },
    {
      question: '강풍이나 태풍 시에도 안전한가요?',
      answer: '접이식 어닝은 풍속 센서를 장착하여 강풍 시 자동으로 수납되며, 고정식 어닝은 구조 계산을 통해 풍하중을 견딜 수 있도록 설계됩니다. 다만, 태풍 예보 시에는 접이식 어닝을 수납하는 것을 권장합니다.'
    },
    {
      question: '어닝 원단의 수명은 얼마나 되나요?',
      answer: 'Dickson(10년 보증), Recasens(5년 보증), Letom(3년 보증) 원단 브랜드에 따라 다르며, 일반적으로 7~10년 사용 가능합니다. 원단만 교체도 가능하여 경제적입니다.'
    },
    {
      question: '후에 전동으로 변경할 수 있나요?',
      answer: '네, 초기 수동 설치 후에도 모터 키트를 추가하여 전동으로 업그레이드 가능합니다. 리모컨, 스마트 홈 시스템 연동도 지원합니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero
          title="프리미엄 어닝"
          subtitle="공간을 확장하는 스마트한 선택"
          description={<>카페, 레스토랑, 주거 공간의 외부 영역을<br />쾌적하고 스타일리시하게 만들어줍니다.</>}
          imagePrompt="Modern outdoor cafe with elegant retractable awning, contemporary European style architecture"
        />
        
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">접이식 어닝 (Retractable Awning)</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              필요할 때만 펼쳐 사용하는 스마트한 어닝. 공간 활용도를 극대화하고 건물 미관을 해치지 않습니다.
            </p>
            <ProductFeatures features={retractableFeatures} />
            
            {/* Technical Specs */}
            <div className="mt-12 bg-card border p-10">
              <h3 className="font-serif text-2xl font-bold mb-6">기술 사양</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">시스템</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>암(Arm) 시스템:</strong> 국내산 고강도 알루미늄</li>
                    <li>• <strong>최대 돌출:</strong> 4m</li>
                    <li>• <strong>폭 옵션:</strong> 2m ~ 6m (연결 시 최대 12m)</li>
                    <li>• <strong>프레임:</strong> 분체도장 알루미늄</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">제어 & 센서</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>구동:</strong> 수동/전동/자동 선택</li>
                    <li>• <strong>풍속 센서:</strong> 강풍 시 자동 수납</li>
                    <li>• <strong>일조 센서:</strong> 햇빛 감지 자동 개폐</li>
                    <li>• <strong>스마트홈:</strong> IoT 연동 가능</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">고정식 어닝 (Fixed Canopy)</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              상업 시설을 위한 견고한 구조의 고정식 차양. 브랜드 아이덴티티를 표현하는 효과적인 파사드 요소입니다.
            </p>
            <ProductFeatures features={fixedFeatures} />
            
            <div className="mt-12 bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4">설치 사례 및 용도</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">상업 시설</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 카페, 레스토랑 야외 테라스 차양</li>
                    <li>• 매장 출입구 캐노피 (간판 효과)</li>
                    <li>• 호텔, 리조트 외부 공간 차양</li>
                    <li>• 쇼핑몰 통로 및 광장 차양</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">주거 시설</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 주택 테라스 및 발코니 차양</li>
                    <li>• 아파트 베란다 확장형 어닝</li>
                    <li>• 단독주택 주차장 캐노피</li>
                    <li>• 펜션, 게스트하우스 외부 공간</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            
            {/* Fabric Selection */}
            <div className="bg-card border p-10">
              <h3 className="font-serif text-3xl font-bold mb-8">원단 선택 (Fabric Selection)</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                질감과 예산에 따라 선택 가능한 프리미엄 유럽산 원단
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-accent/30 border p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-xl mb-2">Dickson</h4>
                    <p className="text-sm text-muted-foreground">프랑스 (France)</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 최고급 아크릴 원단</li>
                    <li>• 10년 색상 보증</li>
                    <li>• UV 차단율 99%</li>
                    <li>• 300여 가지 컬러/패턴</li>
                    <li>• 프리미엄 선택</li>
                  </ul>
                </div>

                <div className="bg-accent/30 border p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-xl mb-2">Recasens</h4>
                    <p className="text-sm text-muted-foreground">스페인 (Spain)</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 고급 아크릴 원단</li>
                    <li>• 5년 색상 보증</li>
                    <li>• UV 차단율 98%</li>
                    <li>• 다양한 디자인 옵션</li>
                    <li>• 가성비 우수</li>
                  </ul>
                </div>

                <div className="bg-accent/30 border p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-xl mb-2">Letom</h4>
                    <p className="text-sm text-muted-foreground">국내 브랜드</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 실용적 아크릴 원단</li>
                    <li>• 3년 품질 보증</li>
                    <li>• UV 차단율 95%</li>
                    <li>• 기본 색상 선택</li>
                    <li>• 경제적 선택</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-muted/50 p-4 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">컨설팅 안내:</strong> 설치 환경, 사용 빈도, 예산에 따라 최적의 원단을 추천해드립니다. 
                  모든 원단은 UV 차단, 방수, 방염 성능을 갖추고 있습니다.
                </p>
              </div>
            </div>

            {/* Motor Selection */}
            <div className="mt-8 bg-card border p-10">
              <h3 className="font-serif text-3xl font-bold mb-8">모터 선택 (Motor Options)</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-primary bg-primary/5 p-8">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold mb-4">
                    PREMIUM CHOICE
                  </div>
                  <h4 className="font-serif text-2xl font-bold mb-3">Option A: Somfy</h4>
                  <p className="text-sm text-muted-foreground mb-6">프랑스 프리미엄 모터</p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>원산지:</strong> 프랑스 (France)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>저소음:</strong> 작동 소음 최소화 (40dB 이하)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>내구성:</strong> 50,000회 이상 개폐 보증</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>보증:</strong> 5년 무상 A/S</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>스마트 연동:</strong> IoT 및 음성제어 지원</span>
                    </li>
                  </ul>
                  
                  <div className="bg-background p-4 rounded">
                    <p className="text-xs text-muted-foreground">최고의 신뢰성과 조용한 작동을 원하시는 고객에게 추천</p>
                  </div>
                </div>

                <div className="border bg-card p-8">
                  <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold mb-4">
                    VALUE CHOICE
                  </div>
                  <h4 className="font-serif text-2xl font-bold mb-3">Option B: Chinese Motors</h4>
                  <p className="text-sm text-muted-foreground mb-6">경제적 모터</p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>원산지:</strong> 중국 (검증된 제조사)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>소음:</strong> 표준 작동음 (55dB 이하)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>내구성:</strong> 20,000회 이상 개폐 보증</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>보증:</strong> 2년 품질 보증</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>기본 제어:</strong> 리모컨 조작</span>
                    </li>
                  </ul>
                  
                  <div className="bg-muted p-4 rounded">
                    <p className="text-xs text-muted-foreground">비용 효율을 중시하시는 고객에게 적합한 선택</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <div className="mt-8 bg-primary text-primary-foreground p-12 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 mb-6 border border-primary-foreground/20 text-xs tracking-[0.3em] uppercase">
                Branding Solution
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4">브랜드를 새기는 로고 인쇄</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                어닝 발란스에 상호명과 로고를 인쇄하여 매장을 효과적으로 홍보하고,
                거리를 지나는 고객에게 강력한 브랜드 인상을 남기세요.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-10">
              {/* Image */}
              <div className="order-2 lg:order-1 flex flex-col">
                <div className="border-4 border-primary-foreground/20 overflow-hidden flex-1">
                  <img 
                    src="/awning-silkscreen-logo.jpg" 
                    alt="실크 스크린 인쇄 어닝"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-primary-foreground/70 mt-3 text-center">
                  실크 스크린 인쇄로 제작된 상업용 어닝
                </p>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 flex flex-col">
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold mb-4">실크 스크린 인쇄</h4>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    야외 환경에서 10년 이상 견디는 프로페셔널 스크린 인쇄 기술로, 
                    비와 햇빛에도 선명한 색상을 유지합니다.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-foreground text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">장기 내구성</h5>
                        <p className="text-sm text-primary-foreground/80">
                          UV 코팅 처리로 자외선에 강하며, 세탁 후에도 인쇄가 지워지지 않습니다.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-foreground text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">선명한 색상 재현</h5>
                        <p className="text-sm text-primary-foreground/80">
                          Pantone 컬러 매칭 시스템으로 브랜드 컬러를 정확하게 구현합니다.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-foreground text-primary flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">대형 로고 가능</h5>
                        <p className="text-sm text-primary-foreground/80">
                          최대 2m 길이의 대형 로고와 상호명 인쇄가 가능합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-foreground/10 border border-primary-foreground/30 p-4 mt-auto">
                    <p className="text-sm text-primary-foreground/90">
                      <strong>포함 서비스:</strong> 무료 디자인 시안 1회 제공, 색상 샘플 확인, 최소 주문 수량 1개부터
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/5 border border-primary-foreground/20 p-8 text-center">
              <h4 className="text-xl font-bold mb-3">주요 고객사</h4>
              <p className="text-primary-foreground/80">
                전국 프랜차이즈 카페 체인, 레스토랑, 호텔, 리조트 등 200여 개 브랜드와 함께합니다.
              </p>
            </div>
          </div>
        </div>

        <ProductFAQ faqs={faqs} />
      </main>
      <Footer />
    </div>
  )
}
