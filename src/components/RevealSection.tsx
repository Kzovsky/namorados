import type { ReactNode } from 'react'

type RevealSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function RevealSection({
  children,
  className = '',
  id,
}: RevealSectionProps) {
  return (
    <section id={id} className={`reveal-section ${className}`.trim()}>
      {children}
    </section>
  )
}
