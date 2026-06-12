import type { LetterContent } from '../data/content'
import { RevealSection } from './RevealSection'

type LoveLetterProps = {
  letter: LetterContent
}

export function LoveLetter({ letter }: LoveLetterProps) {
  return (
    <RevealSection className="section-card letter-section" id="cartinha">
      <span className="section-tag">{letter.eyebrow}</span>
      <div className="section-heading">
        <h2 className="section-title">{letter.title}</h2>
      </div>

      <div className="letter-paper">
        <p className="letter-paper__greeting">{letter.greeting}</p>

        {letter.paragraphs.map((paragraph) => (
          <p key={paragraph} className="letter-paper__paragraph">
            {paragraph}
          </p>
        ))}

        <p className="letter-paper__signoff">{letter.signOff}</p>
        <p className="letter-paper__signature">{letter.signature}</p>
      </div>
    </RevealSection>
  )
}
