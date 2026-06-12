import type { PlaylistTrack } from '../data/content'
import { RevealSection } from './RevealSection'

type PlaylistSectionProps = {
  tracks: PlaylistTrack[]
}

const embeddableTypes = new Set([
  'album',
  'artist',
  'episode',
  'playlist',
  'show',
  'track',
])

function getSpotifyEmbedConfig(spotifyUrl: string) {
  if (!spotifyUrl || spotifyUrl === '#') {
    return null
  }

  if (spotifyUrl.startsWith('spotify:')) {
    const [, type, id] = spotifyUrl.split(':')

    if (type && id && embeddableTypes.has(type)) {
      return {
        embedUrl: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`,
        type,
      }
    }

    return null
  }

  try {
    const url = new URL(spotifyUrl)

    if (!url.hostname.includes('spotify.com')) {
      return null
    }

    const pathParts = url.pathname.split('/').filter(Boolean)
    const normalizedParts = pathParts[0]?.startsWith('intl-')
      ? pathParts.slice(1)
      : pathParts
    const embedParts =
      normalizedParts[0] === 'embed' ? normalizedParts.slice(1) : normalizedParts
    const [type, id] = embedParts

    if (!type || !id || !embeddableTypes.has(type)) {
      return null
    }

    return {
      embedUrl: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`,
      type,
    }
  } catch {
    return null
  }
}

export function PlaylistSection({ tracks }: PlaylistSectionProps) {
  return (
    <RevealSection className="section-card playlist-section">
      <span className="section-tag">A nossa trilha sonora</span>
      <div className="section-heading">
        <h2 className="section-title">Uma playlist de capítulos nossos</h2>
        <p className="section-copy">
          Tudo aqui me lembra você. Tentei acertar no sertanejo, me dá o feedback depois hihi
        </p>
      </div>

      <div className="playlist-grid">
        {tracks.map((track, index) => {
          const trackNumber = String(index + 1).padStart(2, '0')
          const embedConfig = getSpotifyEmbedConfig(track.spotifyUrl)
          const isPlaceholder = track.spotifyUrl === '#'

          return (
            <article
              key={`${track.title}-${track.artist}`}
              className={`spotify-player-card ${track.isSpecial ? 'is-special' : ''}`.trim()}
            >
              <div className="spotify-player-card__header">
                <span className="spotify-player-card__number">{trackNumber}</span>
                <div className="spotify-player-card__body">
                  <h3>{track.title}</h3>
                  <p className="spotify-player-card__artist">{track.artist}</p>
                  <p className="spotify-player-card__reason">{track.reason}</p>
                </div>
              </div>

              <div className="spotify-player-card__embed">
                {embedConfig ? (
                  <iframe
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    height="352"
                    loading="lazy"
                    src={embedConfig.embedUrl}
                    title={`Player do Spotify para ${track.title}`}
                    width="100%"
                  />
                ) : (
                  <div className="spotify-player-card__placeholder">
                    <span>Player do Spotify</span>
                    <p>
                      {isPlaceholder
                        ? 'Cole o link de compartilhamento da música no arquivo content.ts para ativar o player aqui.'
                        : 'Esse link não virou embed automaticamente. Use um link do Spotify no formato open.spotify.com/track/...'}
                    </p>
                    <code>spotifyUrl: "{track.spotifyUrl}"</code>
                  </div>
                )}
              </div>

              <div className="spotify-player-card__footer">
                <span className="spotify-player-card__status">
                  {embedConfig
                    ? 'Player pronto para tocar direto na página.'
                    : 'Quando você colar o link certo, o player aparece aqui.'}
                </span>

                <a
                  className={`spotify-button ${isPlaceholder ? 'is-placeholder' : ''}`.trim()}
                  href={track.spotifyUrl}
                  onClick={(event) => {
                    if (isPlaceholder) {
                      event.preventDefault()
                    }
                  }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Abrir no Spotify
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </RevealSection>
  )
}
