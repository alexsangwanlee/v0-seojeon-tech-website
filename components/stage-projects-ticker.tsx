'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface StageProject {
  id: number
  facility_name: string
  location: string
  display_order: number
}

export function StageProjectsTicker() {
  const [projects, setProjects] = useState<StageProject[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const supabase = createClient()
      const { data } = await supabase
        .from('stage_projects')
        .select('id, facility_name, location, display_order')
        .eq('is_active', true)
        .order('display_order')
      
      if (data) {
        setProjects(data)
      }
    }

    fetchProjects()
  }, [])

  // Show first 6 projects, duplicate for seamless loop effect
  const displayProjects = projects.slice(0, 6)
  const duplicatedProjects = [...displayProjects, ...displayProjects]

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            주요 시공 실적
          </h3>
          <p className="text-muted-foreground text-lg">
            전국 주요 공연장과 문화시설
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for seamless loop effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling content - 6 items per view */}
          <div className="flex gap-4 lg:gap-6 animate-scroll">
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 bg-card border border-border/50 rounded-lg px-6 py-4 lg:px-8 lg:py-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 min-w-[200px] lg:min-w-[240px]"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-base lg:text-lg mb-1">
                    {project.facility_name}
                  </span>
                  <span className="text-muted-foreground text-sm lg:text-base">
                    {project.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
