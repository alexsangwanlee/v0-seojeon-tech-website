export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': '서전텍 (Seojeon Tech)',
    'image': 'https://seojeontech.com/logo.png',
    'description': '프리미엘 쉐이드 솔루션 전문 기업 - 커튼, 블라인드, 어닝, 무대막, 폴딩도어',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '충청남도 논산시 황화로 171',
      'addressRegion': '충청남도',
      'addressLocality': '논산시',
      'postalCode': '32900',
      'addressCountry': 'KR'
    },
    'telephone': '+82-10-5209-9292',
    'email': 'sj6363@hanmail.net',
    'url': 'https://seojeontech.com',
    'areaServed': 'KR',
    'priceRange': '$$',
    'knowsAbout': ['커튼', '블라인드', '어닝', '무대막', '폴딩도어', '항균커튼', '쉐이드시스템'],
    'sameAs': [
      'https://www.naver.com/search.naver?query=서전텍',
      'https://www.google.com/search?q=서전텍'
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': '98',
      'reviewCount': '98'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://seojeontech.com${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  )
}
