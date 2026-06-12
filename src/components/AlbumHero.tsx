import { useState } from 'react'
import type { CSSProperties } from 'react'
import type { AlbumContent } from '../data/content'
import { LocalPhoto } from './LocalPhoto'
import { RevealSection } from './RevealSection'

type AlbumHeroProps = {
  album: AlbumContent
}

export function AlbumHero({ album }: AlbumHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const progress = isPlaying ? '72%' : '29%'

  return (
    <RevealSection className="section-card album-section">
      <span className="section-tag">{album.eyebrow}</span>
      <div className="album-layout">
        <div className="album-cover">
          <LocalPhoto
            alt={album.coverAlt}
            className="album-cover__photo"
            loading="eager"
            src={album.coverSrc}
          />
        </div>

        <div className="album-player">
          <p className="album-player__eyebrow">{album.subtitle}</p>
          <h2 className="section-title">{album.title}</h2>
          <p className="section-copy">{album.description}</p>

          <div className="player-panel">
            <div className="player-panel__row">
              <button
                aria-label={
                  isPlaying
                    ? 'Pausar player decorativo'
                    : 'Tocar player decorativo'
                }
                className={`play-button ${isPlaying ? 'is-playing' : ''}`}
                onClick={() => setIsPlaying((current) => !current)}
                type="button"
              >
                <span className="play-button__icon" />
              </button>

              <div className="player-panel__track">
                <strong>{album.highlightTrack}</strong>
                <span>{album.highlightNote}</span>
              </div>
            </div>

            <div
              className="progress-block"
              style={{ '--progress': progress } as CSSProperties}
            >
              <div className="progress-block__bar" aria-hidden="true">
                <span />
              </div>
              <div className="progress-block__time">
                <span>{album.currentTime}</span>
                <span>{album.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
