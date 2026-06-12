import { useState } from 'react'
import type { FinalSurpriseContent } from '../data/content'
import { RevealSection } from './RevealSection'

type FinalSurpriseProps = {
  content: FinalSurpriseContent
}

export function FinalSurprise({ content }: FinalSurpriseProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <RevealSection className="section-card surprise-section">
      <span className="section-tag">{content.eyebrow}</span>
      <div className="surprise-header">
        <div className="section-heading">
          <h2 className="section-title">{content.title}</h2>
        </div>

        <button
          aria-controls="surprise-message"
          aria-expanded={isRevealed}
          className="surprise-button"
          disabled={isRevealed}
          onClick={() => setIsRevealed(true)}
          type="button"
        >
          {isRevealed ? 'Vou te chamar pra sair com segundas intenções' : content.buttonLabel}
        </button>
      </div>

      <div
        id="surprise-message"
        aria-live="polite"
        className={`surprise-message ${isRevealed ? 'is-visible' : ''}`.trim()}
      >
        <p>{content.message}</p>
        <span>{content.signature}</span>
      </div>
    </RevealSection>
  )
}
