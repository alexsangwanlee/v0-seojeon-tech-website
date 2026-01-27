import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '폴딩도어 | 서전텍 - 단열 폴딩도어, 슬라이딩 도어 전문',
  description: '실내외를 자유롭게 연결하는 프리미엄 폴딩도어. PA66 단열바, 복층유리, 35dB 차음. 카페, 베란다, 상업공간 맞춤 시공.',
  keywords: ['폴딩도어', '단열폴딩도어', '슬라이딩도어', '베란다폴딩도어', '카페폴딩도어', '접이식도어'],
  alternates: {
    canonical: 'https://seojeontech.com/folding-doors',
  },
  openGraph: {
    title: '폴딩도어 | 서전텍',
    description: '실내외를 자유롭게 연결하는 프리미엄 폴딩도어. 단열과 차음 성능.',
    url: 'https://seojeontech.com/folding-doors',
    images: [{ url: '/products/folding-doors-card.jpg', width: 1200, height: 630 }],
  },
}

export default function FoldingDoorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
