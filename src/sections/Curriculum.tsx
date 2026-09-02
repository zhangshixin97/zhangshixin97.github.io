import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { capabilitiesConfig } from '../config';

export default function Curriculum() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]');
    targets.forEach((t) => gsap.set(t, { opacity: 0, y: 48 }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay: Number(el.dataset.delay || 0),
              ease: 'power3.out',
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="curriculum"
      ref={rootRef}
      className="relative kv-grid kv-grain"
      style={{ padding: '140px 5vw', background: '#f7f7f4' }}
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
          {capabilitiesConfig.sectionLabel}
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 24, marginBottom: 72 }}>
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
            {capabilitiesConfig.title}
          </h2>
          <p
            data-reveal
            data-delay="0.2"
            style={{
              maxWidth: 380,
              fontSize: 15,
              lineHeight: 1.85,
              color: '#5a6472',
              margin: 0,
            }}
          >
            {capabilitiesConfig.subtitle}
          </p>
        </div>

        {/* 玻璃卡片 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 28 }}>
          {capabilitiesConfig.items.map((item, i) => (
            <div
              key={item.slug}
              data-reveal
              data-delay={String((i % 2) * 0.12)}
              onClick={() => navigate(`/capability/${item.slug}`)}
              className={`group ${
                i === capabilitiesConfig.items.length - 1 && capabilitiesConfig.items.length % 2 === 1
                  ? 'md:col-span-2'
                  : ''
              }`}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(16,20,24,0.08)',
                borderRadius: 20,
                padding: 'clamp(28px, 3vw, 44px)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 28px 64px rgba(16,20,24,0.12)';
                el.style.borderColor = 'rgba(37,99,235,0.35)';
                const glow = el.querySelector<HTMLElement>('[data-glow]');
                if (glow) glow.style.opacity = '1';
                const arrow = el.querySelector<HTMLElement>('[data-arrow]');
                if (arrow) arrow.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(16,20,24,0.08)';
                const glow = el.querySelector<HTMLElement>('[data-glow]');
                if (glow) glow.style.opacity = '0';
                const arrow = el.querySelector<HTMLElement>('[data-arrow]');
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              {/* 角落渐变色晕 */}
              <div
                data-glow
                style={{
                  position: 'absolute',
                  top: -70,
                  right: -70,
                  width: 220,
                  height: 220,
                  borderRadius: '50%',
                  background: item.hue,
                  filter: 'blur(60px)',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none',
                }}
              />

              <div className="flex items-start justify-between" style={{ marginBottom: 28 }}>
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 300,
                    fontSize: 40,
                    lineHeight: 1,
                    color: 'rgba(16,20,24,0.16)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: item.hue,
                    borderRadius: 999,
                    padding: '6px 14px',
                  }}
                >
                  {item.english}
                </span>
              </div>

              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 2.2vw, 32px)',
                  letterSpacing: '-0.01em',
                  color: '#101418',
                  margin: '0 0 16px 0',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: '#5a6472',
                  margin: '0 0 24px 0',
                }}
              >
                {item.description}
              </p>

              <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 28 }}>
                {item.points.map((pt) => (
                  <span
                    key={pt}
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#3d4652',
                      background: 'rgba(16,20,24,0.05)',
                      borderRadius: 999,
                      padding: '6px 14px',
                    }}
                  >
                    {pt}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center"
                style={{
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#2563eb',
                }}
              >
                {capabilitiesConfig.detailHint}
                <span data-arrow style={{ transition: 'transform 0.35s ease', display: 'inline-block' }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
