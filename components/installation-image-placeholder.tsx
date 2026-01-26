import { ImageIcon } from 'lucide-react'

interface InstallationImagePlaceholderProps {
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide'
  caption?: string
  className?: string
}

export function InstallationImagePlaceholder({ 
  aspectRatio = 'video', 
  caption,
  className = ''
}: InstallationImagePlaceholderProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]'
  }

  return (
    <div className={className}>
      <div className={`${aspectClasses[aspectRatio]} relative w-full bg-muted/30 border-2 border-dashed border-border flex items-center justify-center overflow-hidden group hover:border-primary/50 transition-colors`}>
        <div className="text-center p-6">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/40 group-hover:text-primary/50 transition-colors" strokeWidth={1.5} />
          <p className="text-sm text-muted-foreground font-medium">시공 사례 이미지</p>
          <p className="text-xs text-muted-foreground/60 mt-1">Installation Photo Placeholder</p>
        </div>
        
        {/* Watermark */}
        <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/30 font-mono">
          seojeontech.com
        </div>
      </div>
      
      {caption && (
        <p className="mt-3 text-sm text-muted-foreground text-center">{caption}</p>
      )}
    </div>
  )
}
