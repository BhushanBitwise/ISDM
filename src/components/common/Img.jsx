import { useState } from 'react';

/**
 * Img component with graceful fallback on error.
 */
export default function Img({
  src,
  alt,
  fallbackSrc = null,
  className = '',
  style = {},
  loading = 'lazy',
  ...props
}) {
  const [errored, setErrored] = useState(false);
  const [fallbackErrored, setFallbackErrored] = useState(false);

  if (errored && !fallbackSrc) {
    return (
      <div
        className={`img-fallback ${className}`}
        style={{ ...style, minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        role="img"
        aria-label={alt}
      >
        <span style={{ fontSize: '0.8125rem', color: 'var(--c-text-sec)' }}>{alt || 'Image unavailable'}</span>
      </div>
    );
  }

  if (errored && fallbackSrc && !fallbackErrored) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        onError={() => setFallbackErrored(true)}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
