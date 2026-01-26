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

  // Duplicate the projects array to create seamless loop
  const duplicatedProjects = [...projects, ...projects]

  const tickerItems = duplicatedProjects.map((project) => `${project.facility_name} (${project.location})`).join(' · ')

  return (
    <section className="py-16 bg-muted/40 overflow-hidden border-y">
      <div className="mb-8 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          주요 시공 실적
        </h3>
        <p className="text-muted-foreground">
          전국 300여 곳 이상의 공연장과 문화시설
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/40 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/40 to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex gap-8 animate-scroll">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 text-foreground/70 text-lg font-medium whitespace-nowrap hover:text-foreground transition-colors"
            >
              <span className="font-semibold text-foreground">{project.facility_name}</span>
              <span className="text-foreground/50 ml-2">({project.location})</span>
            </div>
          ))}
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
          animation: scroll 50s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
