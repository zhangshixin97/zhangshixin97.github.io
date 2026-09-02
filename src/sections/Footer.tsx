import { footerConfig } from '../config';

export default function Footer() {
  if (!footerConfig.heading && footerConfig.columns.length === 0) {
    return null;
  }

  return (
    <footer
      id="footer"
      className="relative"
      style={{
        padding: '140px 5vw 60px',
        background: '#0a1430',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* 顶部渐变分割线 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #2563eb, #7c3aed, #ea580c)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {footerConfig.heading && (
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(36px, 4.5vw, 72px)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#eaf1ff',
              marginBottom: 80,
              textWrap: 'balance',
            }}
          >
            {footerConfig.heading}
            <span style={{ color: '#3b82f6' }}>.</span>
          </h2>
        )}

        {footerConfig.columns.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 60, marginBottom: 110 }}
          >
            {footerConfig.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col" style={{ gap: 14 }}>
                {column.title && (
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      fontWeight: 300,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#3b82f6',
                      marginBottom: 10,
                    }}
                  >
                    {column.title}
                  </span>
                )}
                {column.links.map((link) => (
                  <span
                    key={link}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: '#8fa2c8',
                      width: 'fit-content',
                    }}
                  >
                    {link}
                  </span>
                ))}
              </div>
            ))}
            {footerConfig.qrImage && (
              <div className="flex flex-col" style={{ gap: 14, alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 12,
                    fontWeight: 300,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#3b82f6',
                    marginBottom: 10,
                  }}
                >
                  {footerConfig.qrTitle}
                </span>
                <img
                  src={footerConfig.qrImage}
                  alt={footerConfig.qrTitle}
                  style={{
                    width: 180,
                    borderRadius: 12,
                    border: '1px solid rgba(148, 178, 255, 0.25)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(59, 130, 246, 0.2)',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    color: '#8fa2c8',
                  }}
                >
                  {footerConfig.qrCaption}
                </span>
              </div>
            )}
          </div>
        )}

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{
            paddingTop: 24,
            borderTop: '1px solid rgba(148, 178, 255, 0.10)',
            gap: 16,
          }}
        >
          {footerConfig.copyright && (
            <span
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 300,
                fontSize: 12,
                color: '#8fa2c8',
                opacity: 0.5,
              }}
            >
              {footerConfig.copyright}
            </span>
          )}
          {footerConfig.bottomLinks.length > 0 && (
            <div className="flex items-center" style={{ gap: 24 }}>
              {footerConfig.bottomLinks.map((bottomLink) => (
                <a
                  key={bottomLink.label}
                  href={bottomLink.href || '#'}
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 300,
                    fontSize: 12,
                    color: '#8fa2c8',
                    opacity: 0.5,
                    textDecoration: 'none',
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '0.9'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = '0.5'; }}
                >
                  {bottomLink.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
