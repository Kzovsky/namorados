type EnvelopeIntroProps = {
  title: string
  eyebrow: string
  note: string
  from: string
  to: string
  buttonLabel: string
  isOpen: boolean
  onOpen: () => void
}

export function EnvelopeIntro({
  title,
  eyebrow,
  note,
  from,
  to,
  buttonLabel,
  isOpen,
  onOpen,
}: EnvelopeIntroProps) {
  return (
    <section className="envelope-intro">
      <div className="intro-layout">
        <div className="intro-copy">
          <p className="intro-kicker">{eyebrow}</p>
          <h1 className="intro-title">{title}</h1>
          <p className="intro-lead">{note}</p>

          <div className="intro-meta" aria-label="Destinatário da carta">
            <span>
              <strong>De:</strong> {from}
            </span>
            <span>
              <strong>Para:</strong> {to}
            </span>
          </div>

          <button
            aria-expanded={isOpen}
            className="intro-button"
            disabled={isOpen}
            onClick={onOpen}
            type="button"
          >
            {isOpen ? 'Cartinha aberta' : buttonLabel}
          </button>
        </div>

        <div className="envelope-scene" aria-hidden="true">
          <div className={`envelope ${isOpen ? 'is-open' : ''}`}>
            <div className="envelope__shadow" />
            <div className="envelope__paper">
              <span className="envelope__paper-kicker">feito para a minha Gigi</span>
              <p>
                Tem cartinha, música e a gente aqui. Vê com carinho. Todo o meu amor pra você sempre.
              </p>
              <div className="envelope__paper-signoff">
                <span>De: {from}</span>
                <span>Para: {to}</span>
              </div>
            </div>

            <div className="envelope__back" />
            <div className="envelope__front">
              <div className="envelope__address">
                <span>De: {from}</span>
                <span>Para: {to}</span>
              </div>
            </div>
            <div className="envelope__seal">C + G</div>
            <div className="envelope__flap" />
          </div>
        </div>
      </div>
    </section>
  )
}
