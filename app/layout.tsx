import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData, OrganizationSchema } from '@/components/structured-data'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
});

const notoSerifKR = Noto_Serif_KR({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seojeontec.com'),
  title: '서전텍 | 프리미엄 쉐이드 솔루션 - 커튼, 블라인드, 어닝, 무대막',
  description: '30년 전문성의 서전텍. 프리미엄 커튼·블라인드, 접이식·고정식 어닝, 전동 무대막, 폴딩도어 및 쉐이드 솔루션. 전국 300+ 공연장 시공 실적. 견적 문의: 010-5209-9292',
  keywords: ['커튼', '블라인드', '어닝', '무대막', '폴딩도어', '쉐이드', '항균커튼', '전동어닝', '건축 창호'],
  authors: [{ name: 'Seojeon Tech' }],
  creator: 'Seojeon Tech',
  publisher: 'Seojeon Tech',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://seojeontec.com',
    title: '서전텍 | 프리미엄 쉐이드 솔루션',
    description: '공간의 빛을 디자인하는 프리미엄 쉐이드 솔루션. 커튼, 블라인드, 어닝, 무대막 전문',
    siteName: '서전텍',
    images: [
      {
        url: 'https://seojeontec.com/hero-main.jpg',
        width: 1200,
        height: 630,
        alt: '서전텍 프리미엄 쉐이드 솔루션',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '서전텍 | 프리미엄 쉐이드 솔루션',
    description: '30년 전문성의 서전텍. 커튼, 블라인드, 어닝, 무대막, 폴딩도어 전문. 전국 300+ 시공 실적.',
    images: ['https://seojeontec.com/hero-main.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-site-verification-code',
    },
  },
  category: 'business',
  classification: '인테리어, 건축자재, 쉐이드솔루션',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  applicationName: 'Seojeon Tech',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Seojeon Tech',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="KR-44" />
        <meta name="geo.placename" content="논산시, 충청남도" />
        <meta name="geo.position" content="36.1869;127.0987" />
        <meta name="ICBM" content="36.1869, 127.0987" />
        <meta name="naver-site-verification" content="b85726438b390c8436eb9902634d6869c584a4c0" />
        <StructuredData />
        <OrganizationSchema />
      </head>
      <body className={`${notoSansKR.variable} ${notoSerifKR.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
