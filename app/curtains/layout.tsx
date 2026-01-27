import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '커튼 & 블라인드 | 서전텍 - 항균커튼, 병원커튼, 블라인드 전문',
  description: '병원용 항균 커튼부터 허니콤 블라인드, 버티칼 블라인드까지. 99.9% 살균 Hygenica 기술 적용. 방염 1급 인증. 맞춤 제작 및 전국 시공.',
  keywords: ['항균커튼', '병원커튼', '블라인드', '허니콤블라인드', '버티칼블라인드', '롤블라인드', '방염커튼'],
  alternates: {
    canonical: 'https://seojeontech.com/curtains',
  },
  openGraph: {
    title: '커튼 & 블라인드 | 서전텍',
    description: '병원용 항균 커튼부터 허니콤 블라인드까지. 99.9% 살균 Hygenica 기술 적용.',
    url: 'https://seojeontech.com/curtains',
    images: [{ url: '/products/curtains-card.jpg', width: 1200, height: 630 }],
  },
}

export default function CurtainsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
