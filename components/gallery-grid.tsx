'use client'

import { useState } from 'react'
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
  const [selectedCategory, setSelectedCategory] = useState('all')
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

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="px-6"
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>

          {/* Masonry Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden bg-card border hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
                  onClick={() => openLightbox(project)}
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image_url || '/placeholder.svg'} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-background font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-background/80 text-sm">
                      {categoryLabels[project.category]} • {new Date(project.project_date).getFullYear()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">아직 등록된 프로젝트가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentProject && (
        <div className="fixed inset-0 bg-foreground/98 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Content */}
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="overflow-hidden mb-8">
              <img 
                src={currentProject.image_url || '/placeholder.svg'} 
                alt={currentProject.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Project Info */}
            <div className="bg-background p-8">
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                {categoryLabels[currentProject.category]} • {new Date(currentProject.project_date).getFullYear()}
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4">{currentProject.title}</h2>
              {currentProject.description && (
                <p className="text-muted-foreground leading-relaxed text-pretty">
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
