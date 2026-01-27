import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <img 
              src="/logo.png" 
              alt="서전텍 - 프리미엄 쉐이드 솔루션" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm text-slate-400 text-pretty">
              프리미엄 쉐이드 솔루션 전문 기업
            </p>
            <p className="text-slate-300 mt-2 text-pretty">
              공간의 빛을 디자인하는 서전텍
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">문의하기</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:010-5209-9292" className="text-slate-300 hover:text-white transition-colors">
                  010-5209-9292
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:sj6363@hanmail.net" className="text-slate-300 hover:text-white transition-colors">
                  sj6363@hanmail.net
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-slate-300">
                  충청남도 논산시 황화로 171
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">빠른 링크</h4>
            <nav className="space-y-2 mb-6">
              <Link href="/curtains" className="block text-slate-300 hover:text-white transition-colors">
                커튼/블라인드
              </Link>
              <Link href="/awnings" className="block text-slate-300 hover:text-white transition-colors">
                어닝
              </Link>
              <Link href="/stage" className="block text-slate-300 hover:text-white transition-colors">
                무대막
              </Link>
              <Link href="/folding-doors" className="block text-slate-300 hover:text-white transition-colors">
                폴딩도어
              </Link>
              <Link href="/gallery" className="block text-slate-300 hover:text-white transition-colors">
                시공사례
              </Link>
            </nav>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="tel:010-5209-9292">지금 상담 받기</a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Seojeon Tech (서전텍). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
