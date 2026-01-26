'use client'

import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface ProductFeaturesProps {
  features: Feature[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="group p-6 rounded-lg border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <feature.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
