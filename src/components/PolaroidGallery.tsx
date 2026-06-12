import type { CSSProperties } from 'react'
import type { PhotoMemory } from '../data/content'
import { LocalPhoto } from './LocalPhoto'
import { RevealSection } from './RevealSection'

type PolaroidGalleryProps = {
  photos: PhotoMemory[]
}

const tiltAngles = ['-2.4deg', '1.8deg', '-1.2deg', '2.7deg']

export function PolaroidGallery({ photos }: PolaroidGalleryProps) {
  return (
    <RevealSection className="section-card gallery-section">
      <span className="section-tag">Galeria em polaroids</span>
      <div className="section-heading">
        <h2 className="section-title">Nossos pedacinhos favoritos</h2>
        <p className="section-copy">
          Uma coleção de momentos que mereciam uma parede inteira, mas por
          enquanto ganharam esse cantinho.
        </p>
      </div>

      <div className="polaroid-grid">
        {photos.map((photo, index) => (
          <article
            key={photo.src}
            className="polaroid-card"
            style={
              {
                '--tilt': tiltAngles[index % tiltAngles.length],
              } as CSSProperties
            }
          >
            <div className="polaroid-card__frame">
              <LocalPhoto alt={photo.alt} className="polaroid-card__image" src={photo.src} />
              <p className="polaroid-card__caption">{photo.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  )
}
