import { useEffect, useState } from 'react'
import { AlbumHero } from './components/AlbumHero'
import { EnvelopeIntro } from './components/EnvelopeIntro'
import { FinalSurprise } from './components/FinalSurprise'
import { LoveLetter } from './components/LoveLetter'
import { PlaylistSection } from './components/PlaylistSection'
import { PolaroidGallery } from './components/PolaroidGallery'
import { ThingsILove } from './components/ThingsILove'
import { TimelineSection } from './components/TimelineSection'
import {
  albumContent,
  finalSurpriseContent,
  introContent,
  letterContent,
  photoMemories,
  playlistTracks,
  thingsILoveList,
  timelineMoments,
} from './data/content'

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!isEnvelopeOpen) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setShowContent(true)
    }, 850)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isEnvelopeOpen])

  return (
    <div className="app">
      <div className="app__glow app__glow--left" aria-hidden="true" />
      <div className="app__glow app__glow--right" aria-hidden="true" />

      <EnvelopeIntro
        buttonLabel={introContent.buttonLabel}
        eyebrow={introContent.eyebrow}
        from={introContent.from}
        isOpen={isEnvelopeOpen}
        note={introContent.note}
        onOpen={() => setIsEnvelopeOpen(true)}
        title={introContent.title}
        to={introContent.to}
      />

      {showContent ? (
        <main className="page-shell">
          <LoveLetter letter={letterContent} />
          <AlbumHero album={albumContent} />
          <PolaroidGallery photos={photoMemories} />
          <PlaylistSection tracks={playlistTracks} />
          <TimelineSection moments={timelineMoments} />
          <ThingsILove items={thingsILoveList} />
          <FinalSurprise content={finalSurpriseContent} />

          <footer className="page-footer">
            Feito com carinho, para a minha futura esposa.
            Pra minha princesa Gigi.
          </footer>
        </main>
      ) : null}
    </div>
  )
}
