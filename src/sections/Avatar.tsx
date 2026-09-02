import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { avatarConfig } from '../config';

export default function Avatar() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]');
    targets.forEach((t) => gsap.set(t, { opacity: 0, y: 36 }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: Number(el.dataset.delay || 0),
              ease: 'power2.out',
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const scrollToFooter = () => {
    document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="avatar"
      ref={rootRef}
      className="relative kv-grain"
      style={{ padding: '140px 5vw', background: '#ffffff' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* 区块头 */}
        <div
          data-reveal
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: '#2563eb',
            marginBottom: 20,
          }}
        >
          {avatarConfig.sectionLabel}
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 24, marginBottom: 48 }}>
          <h2
            data-reveal
            data-delay="0.1"
            style={{
              fontWeight: 900,
              fontSize: 'clamp(36px, 4.5vw, 68px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#101418',
              margin: 0,
              textWrap: 'balance',
            }}
          >
            {avatarConfig.title}
          </h2>
          <p
            data-reveal
            data-delay="0.2"
            style={{
              maxWidth: 400,
              fontSize: 15,
              lineHeight: 1.85,
              color: '#5a6472',
              margin: 0,
            }}
          >
            {avatarConfig.subtitle}
          </p>
        </div>

        {/* 主横幅：定位介绍 + 能力点 */}
        <div
          data-reveal
          data-delay="0.15"
          className="relative overflow-hidden"
          style={{
            borderRadius: 24,
            background: 'linear-gradient(120deg, #101418 0%, #172554 55%, #1d4ed8 100%)',
            padding: 'clamp(36px, 5vw, 64px)',
            marginBottom: 56,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              pointerEvents: 'none',
            }}
          />
          <div
            className="kv-float"
            style={{
              position: 'absolute',
              top: -50,
              right: '10%',
              width: 200,
              height: 200,
              borderRadius: '38% 62% 55% 45% / 45% 40% 60% 55%',
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45), rgba(147,197,253,0.12) 70%)',
              filter: 'blur(4px)',
              pointerEvents: 'none',
            }}
          />
          <div className="relative flex flex-col" style={{ gap: 28, zIndex: 2 }}>
            <div
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 12,
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              {avatarConfig.bannerLabel}
            </div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
                maxWidth: 860,
              }}
            >
              {avatarConfig.intro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
              {avatarConfig.points.map((p, i) => (
                <div
                  key={p.title}
                  data-reveal
                  data-delay={String(0.2 + i * 0.06)}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 14,
                    padding: '18px 20px',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 16,
                      color: '#ffffff',
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center" style={{ gap: 18 }}>
              <button
                onClick={scrollToFooter}
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#101418',
                  background: '#ffffff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '16px 34px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 12px 32px rgba(6,15,38,0.25)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(6,15,38,0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(6,15,38,0.25)';
                }}
              >
                {avatarConfig.ctaText}
              </button>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                {avatarConfig.ctaNote}
              </span>
            </div>
          </div>
        </div>

        {/* 边界声明 */}
        <div data-reveal data-delay="0.1" style={{ maxWidth: 860 }}>
          <div
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              letterSpacing: '0.25em',
              color: '#2563eb',
              marginBottom: 14,
            }}
          >
            {avatarConfig.boundaryLabel}
          </div>
          <h3
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: '#101418',
              margin: '0 0 20px 0',
            }}
          >
            {avatarConfig.boundaryTitle}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {avatarConfig.boundaryItems.map((item) => (
              <li
                key={item}
                className="flex items-start"
                style={{ gap: 12, fontSize: 14, lineHeight: 1.8, color: '#5a6472' }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#2563eb',
                    display: 'block',
                    flexShrink: 0,
                    marginTop: 11,
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
