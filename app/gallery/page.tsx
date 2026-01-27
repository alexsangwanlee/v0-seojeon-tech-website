import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
import { createClient } from '@/lib/supabase/server'

// Supabase 서버 클라이언트가 cookies를 사용하므로 동적 렌더링 필요
export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  let projects = []
  
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('gallery_projects')
      .select('*')
      .order('completion_date', { ascending: false })
    
    if (!error && data) {
      projects = data
    }
  } catch (err) {
    console.error('Failed to fetch projects:', err)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                시공사례
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                전국 300여 곳 이상의 프로젝트를 성공적으로 완수했습니다.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mt-2">
                서전텍의 기술력과 노하우를 확인하세요.
              </p>
            </div>
          </div>
        </section>
        
        <GalleryGrid projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
