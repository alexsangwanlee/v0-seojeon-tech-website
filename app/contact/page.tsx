import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { MapPin, Phone, Mail, Clock, CheckCircle, Zap } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 mb-6 bg-primary-foreground/10 border border-primary-foreground/20 text-xs tracking-[0.3em] uppercase">
                Contact Us
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                프로젝트를 시작해보세요
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
                공간에 대한 여러분의 아이디어를 들려주세요.<br />
                전문 컨설팅부터 시공까지 서전텍이 함께합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-0 -mt-12">
              <a href="tel:010-5209-9292" className="bg-card border border-border p-8 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">전화 문의</h3>
                <p className="text-xl font-bold text-primary mb-1">010-5209-9292</p>
                <p className="text-sm text-muted-foreground">평일 09:00 - 18:00</p>
              </a>

              <a href="mailto:sj6363@hanmail.net" className="bg-card border border-border p-8 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">이메일 문의</h3>
                <p className="text-sm font-bold text-primary mb-1">sj6363@hanmail.net</p>
                <p className="text-sm text-muted-foreground">24시간 접수 가능</p>
              </a>

              <div className="bg-card border border-border p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">오시는 길</h3>
                <p className="text-sm font-medium mb-1">충청남도 논산시 황화로 171</p>
                <p className="text-sm text-muted-foreground">방문 상담 가능</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Left Side - Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Callout Box */}
                <div className="bg-accent border-l-4 border-primary p-5">
                  <p className="text-sm font-medium">
                    💡 문의 접수 후 24시간 내 전문 상담사가 연락드립니다
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <h3 className="text-xl font-bold mb-6">서전텍과 함께하면</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">무료 현장 실측</p>
                        <p className="text-sm text-muted-foreground">정확한 견적을 위한 현장 방문 서비스</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">맞춤 솔루션 제안</p>
                        <p className="text-sm text-muted-foreground">공간과 예산에 최적화된 제품 추천</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">전문 시공팀</p>
                        <p className="text-sm text-muted-foreground">숙련된 기술자의 완벽한 설치</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">A/S 보장</p>
                        <p className="text-sm text-muted-foreground">설치 후에도 책임지는 사후 관리</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgent Contact Box */}
                <div className="bg-primary text-primary-foreground p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5" />
                    <span className="font-bold">긴급 문의</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    급한 수리나 긴급 시공이 필요하신가요?
                  </p>
                  <a 
                    href="tel:010-5209-9292" 
                    className="flex items-center justify-center gap-2 w-full bg-white text-primary py-3 text-sm font-bold hover:bg-white/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    지금 바로 전화하기
                  </a>
                </div>

                {/* Business Hours */}
                <div className="border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-bold">운영 시간</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">평일</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">토요일</span>
                      <span className="font-medium">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">일요일/공휴일</span>
                      <span className="font-medium">10:00 - 15:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border border-border p-8 lg:p-10">
                  <h3 className="text-2xl font-bold mb-2">온라인 문의</h3>
                  <p className="text-muted-foreground mb-8">아래 양식을 작성해주시면 빠르게 연락드리겠습니다.</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
