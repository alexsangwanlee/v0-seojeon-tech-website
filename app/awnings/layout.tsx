import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '프리미엄 어닝 | 서전텍 - 접이식 어닝, 고정식 캐노피 전문',
  description: '카페, 레스토랑, 주거 공간을 위한 프리미엄 어닝. Somfy 전동 모터, Dickson/Recasens 원단. 로고 인쇄 가능. 전국 시공.',
  keywords: ['어닝', '접이식어닝', '고정식어닝', '캐노피', '카페어닝', 'Somfy모터', '전동어닝'],
  alternates: {
    canonical: 'https://seojeontech.com/awnings',
  },
  openGraph: {
    title: '프리미엄 어닝 | 서전텍',
    description: '카페, 레스토랑을 위한 프리미엄 어닝. Somfy 전동 모터 시스템.',
    url: 'https://seojeontech.com/awnings',
    images: [{ url: '/products/awnings-card.jpg', width: 1200, height: 630 }],
  },
}

export default function AwningsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
