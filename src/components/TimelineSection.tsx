import type { TimelineMoment } from '../data/content'
import { RevealSection } from './RevealSection'

type TimelineSectionProps = {
  moments: TimelineMoment[]
}

export function TimelineSection({ moments }: TimelineSectionProps) {
  return (
    <RevealSection className="section-card timeline-section">
      <span className="section-tag">Momentos da nossa história</span>
      <div className="section-heading">
        <h2 className="section-title">Nossa linha do tempo</h2>
        <p className="section-copy">
          Nem tudo teve data certinha, mas não é o mais importante. Importante é o olhar...
        </p>
      </div>

      <div className="timeline-grid">
        {moments.map((moment, index) => (
          <article key={moment.title} className="timeline-card">
            <span className="timeline-card__chapter">
              Capítulo {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{moment.title}</h3>
            <p>{moment.text}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  )
}
