import { useEffect, useRef, useState } from 'react'
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
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      {
        threshold: 0.16,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
