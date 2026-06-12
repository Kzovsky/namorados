import { RevealSection } from './RevealSection'

type ThingsILoveProps = {
  items: string[]
}

export function ThingsILove({ items }: ThingsILoveProps) {
  return (
    <RevealSection className="section-card things-section">
      <span className="section-tag">Coisas que eu amo em você</span>
      <div className="section-heading">
        <h2 className="section-title">Uma lista nada imparcial</h2>
        <p className="section-copy">
          Coisas bestas (outras nem tanto) que fazem nosso relacionamento ser o que é
        </p>
      </div>

      <div className="things-grid">
        {items.map((item) => (
          <article key={item} className="thing-card">
            <span className="thing-card__marker" aria-hidden="true" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  )
}
