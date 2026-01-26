'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  description: string
  slug: string
}

export function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            전문 솔루션
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            공간의 본질을 이해하고, 기능과 미학이 조화를 이루는 통합 시스템을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/${product.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-accent/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-muted-foreground/20 font-serif">
                      {product.category.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-xs tracking-widest text-muted-foreground uppercase mb-3">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/curtains">
              모든 제품 둘러보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
