import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '시공사례 | 서전텍 - 전국 300+ 프로젝트 포트폴리오',
  description: '서전텍의 커튼, 블라인드, 어닝, 무대막, 폴딩도어 시공사례. 병원, 극장, 카페, 호텔 등 다양한 공간의 성공적인 프로젝트를 확인하세요.',
  keywords: ['시공사례', '포트폴리오', '커튼시공', '어닝시공', '무대막시공', '폴딩도어시공'],
  alternates: {
    canonical: 'https://seojeontec.com/gallery',
  },
  openGraph: {
    title: '시공사례 | 서전텍',
    description: '전국 300+ 프로젝트 포트폴리오. 병원, 극장, 카페, 호텔 시공사례.',
    url: 'https://seojeontec.com/gallery',
    images: [{ url: '/installations/auditorium-stage.jpg', width: 1200, height: 630 }],
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
