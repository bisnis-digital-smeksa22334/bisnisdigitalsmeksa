import Icon from './Icon.jsx';

/**
 * Gambar sementara yang mudah diganti. Jika `src` diisi, menampilkan foto asli.
 * variant: 'photo' (default) | 'person' | 'work'
 */
export default function Placeholder({
  src,
  alt = '',
  label = 'Foto belum tersedia',
  variant = 'photo',
  ratio = '4 / 3',
  className = '',
}) {
  if (src) {
    return (
      <div className={`ph ph--filled ${className}`} style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`ph ph--${variant} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${label} (placeholder)`}
    >
      {variant === 'person' ? (
        <svg viewBox="0 0 100 100" className="ph-person" aria-hidden="true">
          <circle cx="50" cy="38" r="15" />
          <path d="M18 96c2-20 15-31 32-31s30 11 32 31H18Z" />
        </svg>
      ) : (
        <div className="ph-inner">
          <Icon name={variant === 'work' ? 'layers' : 'image'} size={28} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
