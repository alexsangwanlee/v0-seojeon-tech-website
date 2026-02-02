import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '전동 무대막 | 서전텍 - 극장, 강당, 공연장 무대막 전문',
  description: '극장, 강당, 공연장을 위한 전동 무대막 시스템. Somfy/Nice 프리미엄 모터, 방음 벨벳 원단, 방염 1급 인증. 전국 300+ 시공 실적.',
  keywords: ['무대막', '전동무대막', '극장무대막', '강당무대막', '공연장커튼', '방염무대막', 'Somfy무대막'],
  alternates: {
    canonical: 'https://seojeontec.com/stage',
  },
  openGraph: {
    title: '전동 무대막 | 서전텍',
    description: '극장, 강당, 공연장을 위한 전동 무대막 시스템. 전국 300+ 시공 실적.',
    url: 'https://seojeontec.com/stage',
    images: [{ url: '/products/stage-card.jpg', width: 1200, height: 630 }],
  },
}

export default function StageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
