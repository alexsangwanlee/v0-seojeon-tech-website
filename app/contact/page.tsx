import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { MapPin, Phone, Mail, Clock, CheckCircle, Zap } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        {/* Hero Section - Notion Style */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb Style Tag */}
              <div className="flex items-center gap-2 mb-6 text-sm text-[#9b9a97]">
                <span>서전텍</span>
                <span>/</span>
                <span className="text-[#37352f]">문의하기</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-[#37352f] mb-4 tracking-tight">
                프로젝트를 시작해보세요 ✨
              </h1>
              
              {/* Two-line Description */}
              <div className="space-y-1 text-lg text-[#6b6b6b]">
                <p>공간에 대한 여러분의 아이디어를 들려주세요.</p>
                <p>전문 컨설팅부터 시공까지 서전텍이 함께합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <hr className="border-[#e9e9e7]" />
          </div>
        </div>

        {/* Contact Info Cards - Notion Database Style */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Section Label */}
              <p className="text-xs font-medium text-[#9b9a97] uppercase tracking-wider mb-4">
                빠른 연락
              </p>
              
              {/* Cards Grid */}
              <div className="grid md:grid-cols-3 gap-3">
                {/* Phone Card */}
                <a 
                  href="tel:010-5209-9292" 
                  className="group bg-[#f7f6f3] hover:bg-[#efeee9] rounded-lg p-5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#e3e2de] rounded-md flex items-center justify-center group-hover:bg-[#37352f] transition-colors">
                      <Phone className="w-4 h-4 text-[#6b6b6b] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-[#37352f]">전화</span>
                  </div>
                  <p className="text-lg font-semibold text-[#37352f]">010-5209-9292</p>
                  <p className="text-xs text-[#9b9a97] mt-1">평일 09:00 - 18:00</p>
                </a>

                {/* Email Card */}
                <a 
                  href="mailto:sj6363@hanmail.net" 
                  className="group bg-[#f7f6f3] hover:bg-[#efeee9] rounded-lg p-5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#e3e2de] rounded-md flex items-center justify-center group-hover:bg-[#37352f] transition-colors">
                      <Mail className="w-4 h-4 text-[#6b6b6b] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-[#37352f]">이메일</span>
                  </div>
                  <p className="text-sm font-semibold text-[#37352f]">sj6363@hanmail.net</p>
                  <p className="text-xs text-[#9b9a97] mt-1">24시간 접수</p>
                </a>

                {/* Location Card */}
                <div className="bg-[#f7f6f3] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#e3e2de] rounded-md flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#6b6b6b]" />
                    </div>
                    <span className="text-sm font-medium text-[#37352f]">위치</span>
                  </div>
                  <p className="text-sm font-semibold text-[#37352f]">충청남도 논산시</p>
                  <p className="text-xs text-[#9b9a97] mt-1">황화로 171</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Two Column */}
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                
                {/* Left Side - Why Choose Us */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Callout Box */}
                  <div className="bg-[#fbf3db] border-l-4 border-[#f9cb4a] rounded-r-lg p-5">
                    <p className="text-sm font-medium text-[#5c4813]">
                      💡 문의 접수 후 24시간 내 전문 상담사가 연락드립니다
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#37352f] mb-4">서전텍과 함께하면</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#dbeddb] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#3d8b40]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#37352f]">무료 현장 실측</p>
                          <p className="text-xs text-[#9b9a97]">정확한 견적을 위한 현장 방문 서비스</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#dbeddb] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#3d8b40]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#37352f]">맞춤 솔루션 제안</p>
                          <p className="text-xs text-[#9b9a97]">공간과 예산에 최적화된 제품 추천</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#dbeddb] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#3d8b40]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#37352f]">전문 시공팀</p>
                          <p className="text-xs text-[#9b9a97]">숙련된 기술자의 완벽한 설치</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#dbeddb] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#3d8b40]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#37352f]">A/S 보장</p>
                          <p className="text-xs text-[#9b9a97]">설치 후에도 책임지는 사후 관리</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Urgent Contact Box */}
                  <div className="bg-[#37352f] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#f9cb4a]" />
                      <span className="text-sm font-medium text-white">긴급 문의</span>
                    </div>
                    <p className="text-xs text-[#9b9a97] mb-4">
                      급한 수리나 긴급 시공이 필요하신가요?
                    </p>
                    <a 
                      href="tel:010-5209-9292" 
                      className="flex items-center justify-center gap-2 w-full bg-white text-[#37352f] rounded-md py-2.5 text-sm font-medium hover:bg-[#f7f6f3] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      지금 바로 전화하기
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div className="border border-[#e9e9e7] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-[#9b9a97]" />
                      <span className="text-sm font-medium text-[#37352f]">운영 시간</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#9b9a97]">평일</span>
                        <span className="text-[#37352f]">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9b9a97]">토요일</span>
                        <span className="text-[#37352f]">10:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9b9a97]">일요일/공휴일</span>
                        <span className="text-[#eb5757]">휴무</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:col-span-3">
                  <div className="bg-[#f7f6f3] rounded-xl p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">📝</span>
                      <h3 className="text-xl font-semibold text-[#37352f]">온라인 문의</h3>
                    </div>
                    <p className="text-sm text-[#9b9a97] mb-6">
                      아래 양식을 작성해주시면 빠르게 연락드리겠습니다.
                    </p>
                    <ContactForm />
                  </div>
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
