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

// FAQPage 스키마 - AEO (Answer Engine Optimization) 핵심
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

// Product 스키마 - 제품 카테고리별
interface ProductSchemaProps {
  name: string
  description: string
  category: string
  image: string
  url: string
}

export function ProductSchema({ name, description, category, image, url }: ProductSchemaProps) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': name,
    'description': description,
    'category': category,
    'image': `https://seojeontech.com${image}`,
    'url': `https://seojeontech.com${url}`,
    'brand': {
      '@type': 'Brand',
      'name': '서전텍'
    },
    'manufacturer': {
      '@type': 'Organization',
      'name': '서전텍 (Seojeon Tech)'
    },
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'KRW',
      'priceValidUntil': new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      'seller': {
        '@type': 'Organization',
        'name': '서전텍'
      }
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': '98'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  )
}

// Service 스키마 - 시공 서비스용
interface ServiceSchemaProps {
  name: string
  description: string
  serviceType: string
  url: string
}

export function ServiceSchema({ name, description, serviceType, url }: ServiceSchemaProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': name,
    'description': description,
    'serviceType': serviceType,
    'url': `https://seojeontech.com${url}`,
    'provider': {
      '@type': 'LocalBusiness',
      'name': '서전텍 (Seojeon Tech)',
      'telephone': '+82-10-5209-9292',
      'email': 'sj6363@hanmail.net',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '충청남도 논산시 황화로 171',
        'addressRegion': '충청남도',
        'addressLocality': '논산시',
        'addressCountry': 'KR'
      }
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'South Korea'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': '서전텍 시공 서비스',
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': '무료 현장 실측' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': '맞춤 설계 및 견적' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': '전문 시공' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'A/S 및 유지보수' } }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}

// Organization 스키마 - 회사 정보 강화 (GEO 최적화)
export function OrganizationSchema() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': '서전텍 (Seojeon Tech)',
    'alternateName': ['서전텍', 'Seojeon Tech', 'SEOJEONTECH'],
    'url': 'https://seojeontech.com',
    'logo': 'https://seojeontech.com/logo.png',
    'description': '30년 전통의 프리미엄 쉐이드 솔루션 전문 기업. 커튼, 블라인드, 어닝, 무대막, 폴딩도어 설계, 제작, 시공.',
    'foundingDate': '1995',
    'founder': {
      '@type': 'Person',
      'name': '서전텍 대표'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '충청남도 논산시 황화로 171',
      'addressLocality': '논산시',
      'addressRegion': '충청남도',
      'postalCode': '32900',
      'addressCountry': 'KR'
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+82-10-5209-9292',
        'contactType': 'customer service',
        'availableLanguage': ['Korean']
      },
      {
        '@type': 'ContactPoint',
        'email': 'sj6363@hanmail.net',
        'contactType': 'customer service'
      }
    ],
    'sameAs': [
      'https://blog.naver.com/seojeontech'
    ],
    'knowsAbout': [
      '커튼', '블라인드', '어닝', '무대막', '폴딩도어', 
      '항균커튼', '전동어닝', '전동무대막', 'Somfy 모터'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': '서전텍 제품 카탈로그',
      'itemListElement': [
        { '@type': 'OfferCatalog', 'name': '커튼 & 블라인드' },
        { '@type': 'OfferCatalog', 'name': '프리미엄 어닝' },
        { '@type': 'OfferCatalog', 'name': '전동 무대막' },
        { '@type': 'OfferCatalog', 'name': '폴딩도어' }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  )
}
