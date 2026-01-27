import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <img 
              src="/logo.png" 
              alt="서전텍 - 프리미엄 쉐이드 솔루션" 
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-6 brightness-0 invert"
            />
            <p className="text-xs sm:text-sm text-slate-400 text-pretty">
              프리미엄 쉐이드 솔루션 전문 기업
            </p>
            <p className="text-sm sm:text-base text-slate-300 mt-2 text-pretty">
              공간의 빛을 디자인하는 서전텍
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">문의하기</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:010-5209-9292" className="text-sm sm:text-base text-slate-300 hover:text-white transition-colors touch-manipulation">
                  010-5209-9292
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:sj6363@hanmail.net" className="text-sm sm:text-base text-slate-300 hover:text-white transition-colors break-all touch-manipulation">
                  sj6363@hanmail.net
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-slate-300">
                  충청남도 논산시 황화로 171
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">빠른 링크</h4>
            <nav className="space-y-2 mb-4 sm:mb-6">
              <Link href="/curtains" className="block text-sm sm:text-base text-slate-300 hover:text-white transition-colors py-1 touch-manipulation">
                커튼/블라인드
              </Link>
              <Link href="/awnings" className="block text-sm sm:text-base text-slate-300 hover:text-white transition-colors py-1 touch-manipulation">
                어닝
              </Link>
              <Link href="/stage" className="block text-sm sm:text-base text-slate-300 hover:text-white transition-colors py-1 touch-manipulation">
                무대막
              </Link>
              <Link href="/folding-doors" className="block text-sm sm:text-base text-slate-300 hover:text-white transition-colors py-1 touch-manipulation">
                폴딩도어
              </Link>
              <Link href="/gallery" className="block text-sm sm:text-base text-slate-300 hover:text-white transition-colors py-1 touch-manipulation">
                시공사례
              </Link>
            </nav>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 touch-manipulation">
              <a href="tel:010-5209-9292">지금 상담 받기</a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700">
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 lg:flex-row">
            <p className="text-xs sm:text-sm text-slate-400 text-center lg:text-left">
              © {new Date().getFullYear()} Seojeon Tech (서전텍). All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <Link href="#" className="hover:text-white transition-colors touch-manipulation py-2">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white transition-colors touch-manipulation py-2">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
