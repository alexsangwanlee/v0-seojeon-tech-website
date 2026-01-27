'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { ProductFAQ } from '@/components/product-faq'
import { Footer } from '@/components/footer'
import { Snowflake, Volume2, DoorOpen, Shield, Maximize, Lock, Layers, Minus, Grid3x3, Frame } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

export default function FoldingDoorsPage() {
  const [activeTab, setActiveTab] = useState('insulated')

  const productTypes = [
    {
      id: 'insulated',
      name: '단열 폴딩도어',
      icon: Snowflake,
      description: '여름에는 시원하게 겨울에는 따뜻하게',
      features: [
        { title: '고단열 성능', desc: 'PA66 단열바와 Low-E 복층유리로 열관류율 1.2W/㎡K 이하 달성' },
        { title: '에너지 절감', desc: '냉난방비 30% 절감 효과, 친환경 에너지 등급 우수' },
        { title: '결로 방지', desc: '단열바 적용으로 겨울철 결로 현상 최소화' },
        { title: '사계절 쾌적', desc: '열손실 차단으로 여름/겨울 실내 온도 유지' }
      ],
      specs: [
        { label: '프레임 두께', value: '70mm ~ 90mm' },
        { label: '유리 사양', value: '24mm 복층유리 (5+14A+5)' },
        { label: '단열바', value: 'PA66 GF25 폴리아마이드' },
        { label: '열관류율', value: '≤ 1.2 W/㎡K' }
      ]
    },
    {
      id: 'premium',
      name: '프리미엄 폴딩도어',
      icon: Shield,
      description: '심플하고 세련된 디자인을 자랑하는 프리미엄 라인',
      features: [
        { title: '슬림 프레임', desc: '최소화된 프레임으로 시야 확보 극대화, 모던한 미학' },
        { title: '고급 마감', desc: '분체도장, 아노다이징, 우드그레인 필름 등 다양한 컬러 옵션' },
        { title: '대형 패널', desc: '최대 1.2m x 3m 크기의 대형 유리 패널 적용 가능' },
        { title: '맞춤 디자인', desc: '프로젝트별 커스터마이징 가능한 프리미엄 솔루션' }
      ],
      specs: [
        { label: '프레임 디자인', value: '슬림 프로파일 60mm~80mm' },
        { label: '유리 최대 크기', value: '1200mm x 3000mm' },
        { label: '마감 옵션', value: '분체도장/아노다이징/우드그레인' },
        { label: '적용 공간', value: '고급 주택, 호텔, 상업시설' }
      ]
    },
    {
      id: 'slim',
      name: '슬림형 폴딩도어',
      icon: Minus,
      description: '공간 효율성을 극대화한 슬림 디자인',
      features: [
        { title: '미니멀 디자인', desc: '50mm~60mm 초슬림 프레임으로 현대적 감각 구현' },
        { title: '시야 개방감', desc: '프레임 최소화로 유리 면적 극대화, 탁 트인 조망' },
        { title: '경량 구조', desc: '최적화된 알루미늄 프로파일로 가볍고 견고한 구조' },
        { title: '실내 공간 분할', desc: '거실-베란다, 방-드레스룸 등 내부 공간 활용' }
      ],
      specs: [
        { label: '프레임 두께', value: '50mm ~ 60mm' },
        { label: '무게', value: '일반 대비 20% 경량화' },
        { label: '유리 두께', value: '5mm ~ 8mm 단판/복층' },
        { label: '적용', value: '실내 공간 분할, 소형 베란다' }
      ]
    },
    {
      id: 'expansion',
      name: '폴딩도어 확장 시스템',
      icon: Maximize,
      description: '다양한 디자인을 표현하는 확장형 시스템',
      features: [
        { title: '대형 공간 구현', desc: '최대 12m 폭까지 연결 설치 가능한 확장형 시스템' },
        { title: '자유로운 개폐 방향', desc: '좌/우/중앙/양방향 등 공간 특성에 맞는 개폐 설계' },
        { title: 'L자형 코너 시스템', desc: '코너 연결로 ㄱ자 공간 전면 개방 구현' },
        { title: '멀티 트랙', desc: '2~3개 트랙 구성으로 다양한 개폐 조합 가능' }
      ],
      specs: [
        { label: '최대 폭', value: '12m (연결 설치)' },
        { label: '패널 수', value: '최대 10~12개 패널' },
        { label: '개폐 방식', value: '좌/우/중앙/양방향 선택' },
        { label: '적용', value: '웨딩홀, 대형 카페, 이벤트홀' }
      ]
    },
    {
      id: 'system',
      name: '시스템 도어',
      icon: Grid3x3,
      description: '방음, 단열이 우수한 시스템 도어',
      features: [
        { title: '고성능 단열', desc: '시스템창 수준의 단열/차음 성능 구현' },
        { title: '강화된 기밀성', desc: '3중 가스켓으로 완벽한 방풍/방수/방음' },
        { title: '내구성', desc: '고강도 알루미늄 합금과 스테인리스 하드웨어' },
        { title: '실내외 겸용', desc: '베란다 출입문, 테라스 도어로 활용' }
      ],
      specs: [
        { label: '차음 성능', value: '40dB 이상' },
        { label: '기밀성', value: '1등급' },
        { label: '유리', value: '24mm ~ 36mm 복층/삼중유리' },
        { label: '적용', value: '아파트, 주택 베란다' }
      ]
    },
    {
      id: 'glass',
      name: '글라스 폴딩도어',
      icon: Layers,
      description: '프레임 없는 투명한 개방감',
      features: [
        { title: '프레임리스 디자인', desc: '상하부 최소 프레임으로 시야 방해 최소화' },
        { title: '강화 유리', desc: '10mm~12mm 강화유리로 안전성과 투명도 확보' },
        { title: '프리미엄 미학', desc: '유리만으로 구성된 고급스러운 공간 연출' },
        { title: '탁 트인 조망', desc: '99% 유리 면적으로 자연과 하나 되는 공간' }
      ],
      specs: [
        { label: '유리 두께', value: '10mm ~ 12mm 강화유리' },
        { label: '프레임', value: '상하부 최소 프로파일' },
        { label: '투명도', value: '99% 유리 면적' },
        { label: '적용', value: '펜트하우스, 고급 주택, 전망 좋은 공간' }
      ]
    },
    {
      id: 'moving-wall',
      name: '프레임 무빙월',
      icon: Frame,
      description: '독립된 프레임 패널의 이동형 파티션',
      features: [
        { title: '공간 자유도', desc: '레일을 따라 수평 이동하며 공간을 개방/분리' },
        { title: '독립 패널', desc: '각 패널이 독립적으로 이동 가능' },
        { title: '다양한 마감', desc: '유리, 목재, 패브릭 등 인테리어에 맞춰 선택' },
        { title: '상업 공간 최적화', desc: '회의실, 이벤트홀, 전시장 등 가변형 공간' }
      ],
      specs: [
        { label: '패널 크기', value: '폭 600mm~1200mm' },
        { label: '높이', value: '최대 3500mm' },
        { label: '마감재', value: '유리/목재/패브릭/HPL' },
        { label: '적용', value: '회의실, 전시장, 이벤트홀' }
      ]
    }
  ]

  const features = [
    {
      icon: Snowflake,
      title: '단열 폴딩도어',
      description: '여름에는 시원하게 겨울에는 따뜻하게. PA66 단열바와 복층유리로 에너지 효율을 극대화한 사계절 쾌적한 폴딩도어'
    },
    {
      icon: Shield,
      title: '우수한 기밀성',
      description: '이중 가스켓 실링 시스템으로 방풍, 방진, 방음 성능을 동시에 구현. 외부 소음과 먼지를 효과적으로 차단'
    },
    {
      icon: DoorOpen,
      title: '스무스한 개폐감',
      description: '정밀 베어링과 최적화된 레일 시스템으로 무거운 유리도 가볍게 열리는 부드러운 조작감 제공'
    },
    {
      icon: Volume2,
      title: '방음 성능',
      description: '이중 가스켓과 복층유리 조합으로 35dB 이상의 우수한 차음 성능. 조용하고 편안한 실내 환경 조성'
    },
    {
      icon: Maximize,
      title: '최대 개방감',
      description: '80% 이상 전면 개방으로 실내와 실외를 하나의 공간으로 연결. 탁 트인 시야와 자연스러운 공간 확장'
    },
    {
      icon: Lock,
      title: '안전한 잠금장치',
      description: '멀티 포인트 락 시스템으로 보안성과 기밀성을 동시에 확보. 안심할 수 있는 생활 공간 보장'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero
          title="폴딩도어 시스템"
          subtitle="공간의 경계를 허무는 혁신적 개방감"
          description={<>실내외를 자유롭게 연결하는 프리미엄 폴딩도어.<br />뛰어난 단열과 차음 성능으로 사계절 쾌적함을 선사합니다.</>}
          imagePrompt="Modern luxury home with large folding glass doors opening to patio, contemporary architecture, bright natural light"
        />
        
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">프리미엄 폴딩도어의 특장점</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              단순한 창호를 넘어, 공간의 가치를 높이는 건축 요소입니다.
            </p>
            <ProductFeatures features={features} />
          </div>
        </section>

        {/* Product Types Section with Tabs */}
        <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">제품 라인업</h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                공간과 용도에 맞는 다양한 폴딩도어 시스템을 제공합니다.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 h-auto bg-muted/50 p-2">
                {productTypes.map((product) => (
                  <TabsTrigger 
                    key={product.id} 
                    value={product.id}
                    className="text-xs sm:text-sm py-2 sm:py-3 px-2 sm:px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {product.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {productTypes.map((product) => {
                const Icon = product.icon
                return (
                  <TabsContent key={product.id} value={product.id} className="mt-8 sm:mt-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Product Info */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-1">{product.name}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground">{product.description}</p>
                          </div>
                        </div>

                        <div className="space-y-6 mb-8">
                          <div>
                            <h4 className="font-bold text-base sm:text-lg mb-4">주요 특징</h4>
                            <div className="space-y-4">
                              {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-primary text-xs font-bold">{idx + 1}</span>
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-sm sm:text-base mb-1">{feature.title}</h5>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Specs */}
                      <div>
                        <Card className="border-2 border-primary/20">
                          <CardContent className="p-6 sm:p-8">
                            <h4 className="font-bold text-lg sm:text-xl mb-6">기술 사양</h4>
                            <div className="space-y-4">
                              {product.specs.map((spec, idx) => (
                                <div key={idx} className="flex justify-between items-start py-3 border-b border-border last:border-0">
                                  <span className="text-sm sm:text-base text-muted-foreground font-medium">{spec.label}</span>
                                  <span className="text-sm sm:text-base font-semibold text-right ml-4">{spec.value}</span>
                                </div>
                              ))}
                            </div>

                            {/* Additional Info Box */}
                            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">맞춤 제작:</strong> 현장 여건에 맞춰 폭, 높이, 패널 수, 개폐 방향을 자유롭게 설계 가능합니다.
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Features Summary */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div className="bg-card border p-4 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">1년</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">품질 보증</div>
                          </div>
                          <div className="bg-card border p-4 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100,000회</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">개폐 내구성</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </section>

        {/* Detailed Specs Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">상세 사양</h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                폴젠 기술력이 적용된 폴딩도어의 세부 스펙
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
              <Card>
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6">프레임 및 구조</h3>
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground/80 uppercase tracking-wider">재질 & 구조</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• <strong>알루미늄:</strong> 6063-T5 고강도 합금</li>
                        <li>• <strong>프로파일:</strong> 50mm~90mm 두께 (제품별 상이)</li>
                        <li>• <strong>단열바:</strong> PA66 GF25 폴리아마이드</li>
                        <li>• <strong>마감:</strong> 불소수지도장, 우드그레인 필름</li>
                        <li>• <strong>색상:</strong> 블랙, 화이트, 실버, 맞춤 색상</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground/80 uppercase tracking-wider">핵심 기술</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• <strong>고단열바:</strong> 열교 차단, 결로 방지</li>
                        <li>• <strong>다중 가스켓:</strong> 방풍/방진/차음 밀폐</li>
                        <li>• <strong>볼베어링:</strong> 정밀 주행 시스템</li>
                        <li>• <strong>스마트핸들:</strong> 멀티 포인트 잠금</li>
                        <li>• <strong>내풍압성:</strong> 160등급 (폴젠 시험성적서)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6">유리 및 성능</h3>
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground/80 uppercase tracking-wider">유리 시스템</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• <strong>복층유리:</strong> 22mm, 24mm, 28mm</li>
                        <li>• <strong>삼중유리:</strong> 32mm, 36mm, 39mm</li>
                        <li>• <strong>Low-E 코팅:</strong> 열반사/보온 효과</li>
                        <li>• <strong>안전유리:</strong> 강화유리, 투명유리</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground/80 uppercase tracking-wider">성능 지표</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• <strong>열관류율:</strong> 1.095~1.226 W/㎡K</li>
                        <li>• <strong>차음:</strong> 35dB~40dB</li>
                        <li>• <strong>기밀성:</strong> 1등급</li>
                        <li>• <strong>내구성:</strong> 100,000회 개폐 보증</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6">설치 사양</h3>
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground/80 uppercase tracking-wider">크기 및 범위</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• <strong>최대 폭:</strong> 800mm (패널당)</li>
                        <li>• <strong>최대 높이:</strong> 6000mm</li>
                        <li>• <strong>최대 패널 수:</strong> 30장</li>
                        <li>• <strong>전체 폭:</strong> 최대 12m (확장 시스템)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground/80 uppercase tracking-wider">개폐 방식</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• <strong>좌측납:</strong> 왼쪽으로 패널 접힘</li>
                        <li>• <strong>우측납:</strong> 오른쪽으로 패널 접힘</li>
                        <li>• <strong>중앙납:</strong> 양쪽으로 패널 접힘</li>
                        <li>• <strong>구동:</strong> 상하부 트랙런너 방식</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-block px-4 py-2 mb-6 border border-border text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Applications
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">적용 사례</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                상업 공간과 베란다를 중심으로 다양한 프로젝트에 최적화된 솔루션을 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card border p-8">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-4">상업 공간 (Commercial Spaces)</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    공간의 유연성과 개방감이 필수적인 비즈니스 환경에 최적화
                  </p>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">카페 & 레스토랑</strong>
                      <span className="text-muted-foreground">테라스 개방형 운영으로 고객 경험 극대화</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">호텔 & 리조트</strong>
                      <span className="text-muted-foreground">로비, 라운지, 객실 발코니 등 프리미엄 공간 연출</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">웨딩홀 & 이벤트 공간</strong>
                      <span className="text-muted-foreground">행사 규모에 따른 공간 분할/통합 시스템</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">오피스 & 회의실</strong>
                      <span className="text-muted-foreground">가변형 공간 설계, 자연 채광 극대화</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card border p-8">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-4">베란다 (Verandas)</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    주거 공간의 실내외 경계를 허물어 생활 공간 품질 향상
                  </p>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">아파트 거실 베란다</strong>
                      <span className="text-muted-foreground">확장형 거실 공간, 전망과 채광 최적화</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">빌라 & 단독주택 테라스</strong>
                      <span className="text-muted-foreground">정원 연결, 바비큐 공간 등 실외 활동 공간 확보</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">펜트하우스 루프탑</strong>
                      <span className="text-muted-foreground">프리미엄 옥상 정원, 파티 공간 구현</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <div>
                      <strong className="block mb-1">발코니 확장형</strong>
                      <span className="text-muted-foreground">안방, 드레스룸 등 프라이빗 공간 연결</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
              
            <div className="bg-accent/50 border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border bg-background flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-bold mb-2">설계 고려사항</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    폴딩도어는 전면 개방 시 패널이 접히는 <strong className="text-foreground">스태킹 영역(Stacking Zone)</strong>을 반드시 고려해야 합니다. 
                    일반적으로 전체 폭의 10~15%를 스태킹 공간으로 확보하는 것이 권장되며, 개폐 방향(좌/우/중앙)은 동선과 가구 배치를 고려하여 결정합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductFAQ 
          faqs={[
            {
              question: '폴딩도어와 미서기(슬라이딩 도어)의 차이는 무엇인가요?',
              answer: '미서기는 패널이 좌우로 밀려 열리지만 전면 개방은 어렵습니다. 폴딩도어는 패널이 접히면서 한쪽으로 모이기 때문에 80% 이상 개방이 가능하여 실내외 공간을 완전히 연결할 수 있습니다. 베란다나 테라스를 거실과 완벽히 통합하고 싶을 때 폴딩도어가 최적의 선택입니다.'
            },
            {
              question: '단열 성능이 일반 창문보다 떨어지지 않나요?',
              answer: '폴젠의 단열 폴딩도어는 PA66 단열바와 Low-E 복층유리를 적용하여 열관류율 1.095~1.226 W/㎡K를 달성합니다. 이는 일반 창문과 동등하거나 더 우수한 수준으로, 에너지 절약 설계 기준을 충족합니다. 겨울철 결로 현상도 최소화됩니다.'
            },
            {
              question: '개폐가 무겁지 않나요?',
              answer: '정밀 볼베어링 시스템과 상하부 트랙런너 구동 방식을 적용하여 대형 유리 패널도 한 손으로 가볍게 열고 닫을 수 있습니다. 100,000회 개폐를 보증하는 내구성 있는 하드웨어를 사용합니다.'
            },
            {
              question: '방충망 설치가 가능한가요?',
              answer: '네, 폴딩도어 전용 플리츠(주름형) 방충망을 별도로 설치할 수 있습니다. 개폐가 간편하고 사용하지 않을 때는 측면으로 접어 공간 활용도가 높습니다.'
            },
            {
              question: '설치 기간은 얼마나 걸리나요?',
              answer: '현장 여건에 따라 다르지만, 일반적으로 아파트 베란다 기준 1~2일 소요됩니다. 대형 상업 공간이나 특수 시공의 경우 3~5일 정도 필요할 수 있습니다. 정확한 일정은 현장 실측 후 안내드립니다.'
            },
            {
              question: '색상과 디자인 커스터마이징이 가능한가요?',
              answer: '네, 블랙/화이트/실버 기본 색상 외에도 고객이 원하는 색상으로 분체도장이 가능하며, 우드그레인 필름 마감도 선택하실 수 있습니다. 프로젝트별로 프레임 두께, 유리 종류, 개폐 방향 등을 맞춤 설계합니다.'
            }
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
