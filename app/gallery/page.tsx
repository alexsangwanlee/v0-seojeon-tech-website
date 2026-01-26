import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
import { createClient } from '@/lib/supabase/server'

export default async function GalleryPage() {
  const supabase = await createClient()
  
  const { data: projects } = await supabase
    .from('gallery_projects')
    .select('*')
    .order('completion_date', { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 text-balance">
                프로젝트 포트폴리오
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                전국 300여 곳 이상의 프로젝트를 성공적으로 완수했습니다.
                서전텍의 기술력과 노하우를 확인하세요.
              </p>
            </div>
          </div>
        </section>
        
        <GalleryGrid projects={projects || []} />
      </main>
      <Footer />
    </div>
  )
}
