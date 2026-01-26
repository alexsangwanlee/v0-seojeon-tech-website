import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
                공간에 대한 여러분의 아이디어를 들려주세요.
                전문 컨설팅부터 시공까지 서전텍이 함께합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-0 -mt-12">
              <a href="tel:010-5209-9292" className="bg-card border-2 border-border p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">전화 문의</h3>
                <p className="text-2xl font-bold text-primary mb-2">010-5209-9292</p>
                <p className="text-sm text-muted-foreground">평일 09:00 - 18:00</p>
              </a>

              <a href="mailto:sj6363@hanmail.net" className="bg-card border-2 border-border p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">이메일 문의</h3>
                <p className="text-lg font-bold text-primary mb-2">sj6363@hanmail.net</p>
                <p className="text-sm text-muted-foreground">24시간 접수 가능</p>
              </a>

              <div className="bg-card border-2 border-border p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">오시는 길</h3>
                <p className="text-sm font-medium mb-2">충청남도 논산시 황화로 171</p>
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
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">무엇이든 물어보세요</h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  커튼, 블라인드, 어닝, 무대막 등 쉐이드 솔루션에 관한 모든 문의를 환영합니다.
                  전문 상담사가 친절하게 안내해 드립니다.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-4 bg-muted/30 border-l-4 border-primary">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">빠른 응답</h4>
                      <p className="text-sm text-muted-foreground">
                        문의 접수 후 24시간 내 연락드립니다.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 border-l-4 border-primary">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">현장 방문 상담</h4>
                      <p className="text-sm text-muted-foreground">
                        정확한 견적을 위해 현장 실측 서비스를 제공합니다.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 border-l-4 border-primary">
                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">맞춤 견적</h4>
                      <p className="text-sm text-muted-foreground">
                        공간과 예산에 맞는 최적의 솔루션을 제안합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary text-primary-foreground">
                  <h4 className="font-bold mb-3">긴급 문의</h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    급한 수리나 긴급 시공이 필요하신가요?
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="tel:010-5209-9292">
                      <Phone className="w-4 h-4 mr-2" />
                      지금 바로 전화하기
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border-2 border-border p-8 lg:p-10">
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
