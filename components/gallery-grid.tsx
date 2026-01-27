'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  category: string
  project_date: string
  image_url: string
  description: string | null
  images: string[]
}

export function GalleryGrid({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  // URL 파라미터 변경 시 카테고리 업데이트
  useEffect(() => {
    const category = searchParams.get('category') || 'all'
    setSelectedCategory(category)
  }, [searchParams])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = ['all', 'curtains', 'awnings', 'stage', 'folding-doors']
  const categoryLabels: Record<string, string> = {
    all: '전체',
    curtains: '커튼/블라인드',
    awnings: '어닝',
    stage: '무대막',
    'folding-doors': '폴딩도어'
  }

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const openLightbox = (project: Project, imageIndex = 0) => {
    setCurrentProject(project)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentProject(null)
    document.body.style.overflow = 'unset'
  }

  const prevImage = () => {
    if (currentProject && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const nextImage = () => {
    if (currentProject && currentImageIndex < currentProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevProject = () => {
    if (!currentProject) return
    const currentIndex = filteredProjects.findIndex(p => p.id === currentProject.id)
    if (currentIndex > 0) {
      openLightbox(filteredProjects[currentIndex - 1])
    }
  }

  const nextProject = () => {
    if (!currentProject) return
    const currentIndex = filteredProjects.findIndex(p => p.id === currentProject.id)
    if (currentIndex < filteredProjects.length - 1) {
      openLightbox(filteredProjects[currentIndex + 1])
    }
  }

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        prevProject()
      } else if (e.key === 'ArrowRight') {
        nextProject()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [lightboxOpen, currentProject, filteredProjects])

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 sm:mb-12 lg:mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium transition-all duration-300 touch-manipulation ${
                  selectedCategory === category 
                    ? 'shadow-lg scale-105' 
                    : 'hover:scale-105 hover:shadow-md'
                }`}
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                  onClick={() => openLightbox(project)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.image_url || '/placeholder.svg'} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  
                  {/* Info Card - Always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/80 to-transparent transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2 line-clamp-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                      <span className="px-2 py-0.5 bg-primary/80 text-white rounded text-xs font-medium">
                        {categoryLabels[project.category]}
                      </span>
                      <span>•</span>
                      <span>{new Date(project.project_date).getFullYear()}년</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-base sm:text-lg">선택한 카테고리에 프로젝트가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Lightbox Modal */}
      {lightboxOpen && currentProject && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300" 
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-white/70 transition-colors z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 touch-manipulation"
            aria-label="Close lightbox"
          >
            <X size={24} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
          </button>

          {/* Previous Project Button */}
          {filteredProjects.findIndex(p => p.id === currentProject.id) > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevProject()
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-all z-10 p-2 sm:p-3 bg-black/50 rounded-full hover:bg-black/70 hover:scale-110 touch-manipulation"
              aria-label="Previous project"
            >
              <ChevronLeft size={28} className="sm:w-10 sm:h-10" strokeWidth={2} />
            </button>
          )}

          {/* Next Project Button */}
          {filteredProjects.findIndex(p => p.id === currentProject.id) < filteredProjects.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextProject()
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-all z-10 p-2 sm:p-3 bg-black/50 rounded-full hover:bg-black/70 hover:scale-110 touch-manipulation"
              aria-label="Next project"
            >
              <ChevronRight size={28} className="sm:w-10 sm:h-10" strokeWidth={2} />
            </button>
          )}

          {/* Content */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="overflow-hidden mb-6 sm:mb-8 rounded-lg shadow-2xl relative">
              <img 
                src={currentProject.image_url || '/placeholder.svg'} 
                alt={currentProject.title}
                className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain bg-black/20"
              />
              
              {/* Project counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs sm:text-sm">
                {filteredProjects.findIndex(p => p.id === currentProject.id) + 1} / {filteredProjects.length}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs sm:text-sm font-medium">
                  {categoryLabels[currentProject.category]}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {new Date(currentProject.project_date).getFullYear()}년
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{currentProject.title}</h2>
              {currentProject.description && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                  {currentProject.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
