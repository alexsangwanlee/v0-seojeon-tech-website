'use client'

import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Phone } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ProductFAQProps {
  faqs: FAQ[]
}

export function ProductFAQ({ faqs }: ProductFAQProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-pretty leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-primary/5 rounded-lg border-2 border-primary/20">
            <p className="text-lg mb-4 text-pretty">
              더 궁금한 사항이 있으신가요? 전문 상담팀이 도와드리겠습니다.
            </p>
            <Button size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:010-5209-9292">지금 상담받기: 010-5209-9292</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
