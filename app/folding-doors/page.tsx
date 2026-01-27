'use client'

import { Header } from '@/components/header'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { ProductFAQ } from '@/components/product-faq'
import { Footer } from '@/components/footer'
import { Snowflake, Volume2, DoorOpen, Shield, Maximize, Lock } from 'lucide-react'

export default function FoldingDoorsPage() {
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

        {/* Product Types Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">제품 라인업</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                공간과 용도에 맞는 다양한 폴딩도어 시스템을 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border-2 border-primary/20 p-8 hover:border-primary transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">단열 폴딩도어</h3>
                  <p className="text-muted-foreground">
                    여름에는 시원하게 겨울에는 따뜻하게
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>고단열 프로파일 적용으로 에너지 절감</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Low-E 복층유리로 사계절 쾌적함 유지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>이중 가스켓으로 기밀성 확보</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>주거공간, 카페, 펜션에 최적화</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border-2 border-primary/20 p-8 hover:border-primary transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">스마트 폴딩도어</h3>
                  <p className="text-muted-foreground">
                    심플하고 세련된 디자인
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>슬림한 프레임으로 현대적인 미학 구현</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>최대 개방감으로 공간 활용도 극대화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>다양한 컬러와 마감 옵션 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>상업공간, 오피스, 호텔에 적합</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border-2 border-primary/20 p-8 hover:border-primary transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">폴딩도어 확장 시스템</h3>
                  <p className="text-muted-foreground">
                    다양한 디자인 구현 가능
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>최대 12m 폭까지 연결 설치 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>좌/우/중앙 개폐 방향 자유 선택</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>코너 연결 시스템으로 L자 구성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>대형 상업 공간, 웨딩홀에 이상적</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border-2 border-primary/20 p-8 hover:border-primary transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">슬라이딩 도어</h3>
                  <p className="text-muted-foreground">
                    편리하고 아름다운 주거공간
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>정밀 레일 시스템으로 부드러운 작동</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>공간 효율성이 중요한 환경에 적합</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>방음·단열 성능 우수</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>아파트, 단독주택 내부 공간 분할</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">기술 사양</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                프리미엄 품질과 우수한 성능을 보장하는 폴딩도어 상세 스펙
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-card border p-10">
                <h3 className="font-serif text-2xl font-bold mb-6">프레임 및 구조</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">재질 & 구조</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>알루미늄:</strong> 6063-T5 고강도 합금</li>
                      <li>• <strong>프로파일:</strong> 70mm~90mm 두께</li>
                      <li>• <strong>단열바:</strong> PA66 GF25 폴리아마이드 (열교 차단)</li>
                      <li>• <strong>마감:</strong> 분체도장, 우드그레인 필름</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">핵심 기술</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>고단열바:</strong> 열전도율 최소화</li>
                      <li>• <strong>이중 가스켓:</strong> 방풍/방진/차음 밀폐</li>
                      <li>• <strong>스무스 러너:</strong> 정밀 베어링 시스템</li>
                      <li>• <strong>멀티락:</strong> 3~5점 잠금장치</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border p-10">
                <h3 className="font-serif text-2xl font-bold mb-6">유리 및 단열 성능</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">유리 시스템</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>복층유리:</strong> 24mm (5mm+14A+5mm)</li>
                      <li>• <strong>삼중유리:</strong> 36mm 고단열 옵션</li>
                      <li>• <strong>Low-E 코팅:</strong> 열반사/보온 효과</li>
                      <li>• <strong>안전유리:</strong> 강화 또는 접합유리</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">성능 지표</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>열관류율:</strong> ≤ 1.2 W/㎡K</li>
                      <li>• <strong>차음:</strong> 35dB~40dB (이중 가스켓)</li>
                      <li>• <strong>방풍:</strong> 기밀성 1등급</li>
                      <li>• <strong>에너지:</strong> 냉난방비 30% 절감</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border p-10">
                <h3 className="font-serif text-2xl font-bold mb-6">하드웨어 & 스무스 러너 시스템</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">주행 시스템</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>베어링:</strong> 정밀 볼베어링</li>
                      <li>• <strong>레일:</strong> 하부/상부 행잉식 선택</li>
                      <li>• <strong>내구성:</strong> 100,000회 개폐 보증</li>
                      <li>• <strong>작동감:</strong> 한 손 가볍게 개폐 가능</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-sm text-foreground/80 uppercase tracking-wider">힌지 & 잠금</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>힌지:</strong> 스테인리스 스틸(SUS)</li>
                      <li>• <strong>멀티락:</strong> 3~5점 잠금장치</li>
                      <li>• <strong>기밀성:</strong> 이중 가스켓 밀폐</li>
                      <li>• <strong>보안:</strong> 방범 성능 강화</li>
                    </ul>
                  </div>
                </div>
              </div>
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
              question: '폴딩도어와 미서기의 차이는 무엇인가요?',
              answer: '미서기는 패널이 좌우로 밀려 열리지만 전면 개방은 어렵습니다. 폴딩도어는 패널이 접히면서 한쪽으로 모이기 때문에 80% 이상 개방이 가능하여 실내외 공간을 완전히 연결할 수 있습니다.'
            },
            {
              question: '단열 성능이 일반 창문보다 떨어지지 않나요?',
              answer: '고급 폴딩도어는 단열바가 적용된 프로파일과 Low-E 복층유리를 사용하여 일반 창문과 동등하거나 더 우수한 단열 성능을 발휘합니다. 열관류율 1.2 W/㎡K 이하로 에너지 절약 설계 기준을 충족합니다.'
            },
            {
              question: '개폐가 무겁지 않나요?',
              answer: '정밀 볼베어링과 균형잡힌 힌지 시스템으로 유리 크기가 크더라도 가볍게 열고 닫을 수 있습니다. 한 손으로 쉽게 조작 가능합니다.'
            },
            {
              question: '방충망 설치가 가능한가요?',
              answer: '네, 폴딩도어 전용 방충망을 별도로 설치할 수 있습니다. 주름 형태의 플리츠 방충망이 일반적이며, 개폐가 간편하고 공간 활용도가 높습니다.'
            }
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
