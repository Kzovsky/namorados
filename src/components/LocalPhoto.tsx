import { useEffect, useState } from 'react'

type LocalPhotoProps = {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export function LocalPhoto({
  src,
  alt,
  className = '',
  loading = 'lazy',
}: LocalPhotoProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [src])

  return (
    <div className={`local-photo ${hasError ? 'is-missing' : ''} ${className}`.trim()}>
      {hasError ? (
        <div className="local-photo__fallback">
          <span>Adicione sua foto em</span>
          <code>{src.replace('/assets/', 'public/assets/')}</code>
        </div>
      ) : (
        <img
          alt={alt}
          loading={loading}
          onError={() => setHasError(true)}
          src={src}
        />
      )}
    </div>
  )
}
