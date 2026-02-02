import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '문의하기 | 서전텍 - 무료 상담 및 견적 요청',
  description: '서전텍에 문의하세요. 커튼, 블라인드, 어닝, 무대막, 폴딩도어 무료 상담 및 맞춤 견적. 전화: 010-5209-9292, 24시간 온라인 접수.',
  keywords: ['견적문의', '상담신청', '무료견적', '커튼견적', '어닝견적', '무대막견적'],
  alternates: {
    canonical: 'https://seojeontec.com/contact',
  },
  openGraph: {
    title: '문의하기 | 서전텍',
    description: '무료 상담 및 맞춤 견적. 전화: 010-5209-9292',
    url: 'https://seojeontec.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
