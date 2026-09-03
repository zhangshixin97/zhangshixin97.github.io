import { useParams, useNavigate } from 'react-router-dom';
import { siteConfig, capabilityDetailConfig } from '../config';

const SLUGS = Object.keys(capabilityDetailConfig.capabilities);

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const data = slug ? capabilityDetailConfig.capabilities[slug] : null;

  if (!data) {
    return (
      <div style={{ background: '#f7f7f4', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#5a6472', fontFamily: "'Inter', sans-serif" }}>{capabilityDetailConfig.notFoundText || 'Not found.'}</p>
      </div>
    );
  }

  const currentIndex = SLUGS.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUGS[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUGS.length - 1 ? SLUGS[currentIndex + 1] : null;

  return (
    <div className="kv-grid kv-grain" style={{ background: '#f7f7f4', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Back nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 72,
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(247, 247, 244, 0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(16, 20, 24, 0.08)',
        }}
      >
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="no-underline"
          style={{
            color: '#101418',
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.brandName}
        </a>
        {capabilityDetailConfig.backLinkText && (
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="nav-link"
          >
            ← {capabilityDetailConfig.backLinkText}
          </a>
        )}
      </nav>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero */}
        <section style={{ padding: '180px 5vw 90px', maxWidth: 860, margin: '0 auto' }}>
          {capabilityDetailConfig.sectionLabel && (
            <div
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#2563eb',
                marginBottom: 24,
              }}
            >
              {capabilityDetailConfig.sectionLabel} · {String(currentIndex + 1).padStart(2, '0')}
            </div>
          )}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#101418',
              margin: '0 0 24px 0',
            }}
          >
            {data.title}
          </h1>
          {data.subtitle && (
            <p
              style={{
                fontWeight: 500,
                fontSize: 19,
                lineHeight: 1.7,
                color: '#3d4652',
                margin: 0,
                maxWidth: 540,
              }}
            >
              {data.subtitle}
            </p>
          )}
          {data.video && (
            <div style={{ marginTop: 48 }}>
              <video
                src={data.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  width: '100%',
                  maxWidth: 360,
                  borderRadius: 20,
                  boxShadow: '0 24px 60px rgba(16,20,24,0.16)',
                  display: 'block',
                  background: '#000',
                }}
              />
              {data.videoCaption && (
                <p
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    color: '#9aa3af',
                    marginTop: 14,
                  }}
                >
                  {data.videoCaption}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Divider */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(16,20,24,0.12)' }} />
        </div>

        {/* Article body */}
        <article style={{ padding: '72px 5vw', maxWidth: 860, margin: '0 auto' }}>
          {data.paragraphs.map((p, i) => {
            const labelMatch = p.match(/^【(.+?)】([\s\S]*)$/);
            return (
              <p
                key={i}
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 2.0,
                  color: '#3d4652',
                  marginBottom: i < data.paragraphs.length - 1 ? 32 : 0,
                }}
              >
                {labelMatch && (
                  <span style={{ fontWeight: 800, color: '#2563eb' }}>
                    【{labelMatch[1]}】
                  </span>
                )}
                {labelMatch ? labelMatch[2] : p}
              </p>
            );
          })}
        </article>

        {/* Prev / Next navigation */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw 120px' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(16,20,24,0.12)', marginBottom: 40 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {prevSlug ? (
              <a
                href={`/capability/${prevSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${prevSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
              >
                <span style={{ fontSize: 11, opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.prevLabel}</span>
                <span>{capabilityDetailConfig.capabilities[prevSlug].title}</span>
              </a>
            ) : <div />}
            {nextSlug ? (
              <a
                href={`/capability/${nextSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${nextSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, textAlign: 'right' }}
              >
                <span style={{ fontSize: 11, opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.nextLabel}</span>
                <span>{capabilityDetailConfig.capabilities[nextSlug].title}</span>
              </a>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
