import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { blueprintConfig } from '../config';

export default function Blueprint() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]');
    targets.forEach((t) => gsap.set(t, { opacity: 0, y: 40 }));

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

  const scrollToFooter = () => {
    document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="blueprint"
      ref={rootRef}
      className="relative kv-grid"
      style={{ padding: '140px 5vw', background: '#f7f7f4' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
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
          {blueprintConfig.sectionLabel}
        </div>

        {/* 主视觉横幅 */}
        <div
          data-reveal
          data-delay="0.1"
          className="relative overflow-hidden"
          style={{
            borderRadius: 24,
            background: 'linear-gradient(120deg, #0f2a6e 0%, #1d4ed8 55%, #3b82f6 100%)',
            padding: 'clamp(40px, 6vw, 80px)',
            marginBottom: 28,
          }}
        >
          {/* 装饰网格与光斑 */}
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
              top: -60,
              right: '8%',
              width: 240,
              height: 240,
              borderRadius: '38% 62% 55% 45% / 45% 40% 60% 55%',
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(147,197,253,0.15) 70%)',
              filter: 'blur(4px)',
              pointerEvents: 'none',
            }}
          />
          <div
            className="kv-float-slow"
            style={{
              position: 'absolute',
              bottom: -70,
              right: '32%',
              width: 180,
              height: 180,
              borderRadius: '60% 40% 45% 55% / 50% 55% 45% 50%',
              background:
                'radial-gradient(circle at 30% 30%, rgba(253,186,116,0.55), rgba(234,88,12,0.1) 70%)',
              filter: 'blur(6px)',
              pointerEvents: 'none',
            }}
          />

          <div className="relative flex flex-col" style={{ gap: 32, zIndex: 2 }}>
            <div style={{ maxWidth: '100%' }}>
              <div
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: 20,
                }}
              >
                FREE E-BOOK · COMING SOON
              </div>
              <h2
                className="blueprint-title"
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(26px, 4.2vw, 56px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  margin: '0 0 24px 0',
                }}
              >
                {blueprintConfig.title}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: 'rgba(255,255,255,0.82)',
                  margin: 0,
                }}
              >
                {blueprintConfig.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center" style={{ gap: 18 }}>
              <button
                onClick={scrollToFooter}
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#1d4ed8',
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
                {blueprintConfig.ctaText}
              </button>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                {blueprintConfig.ctaNote}
              </span>
            </div>
          </div>
        </div>

        {/* 作品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
          {blueprintConfig.works.map((w, i) => (
            <div
              key={w.title}
              data-reveal
              data-delay={String(0.1 + i * 0.08)}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(16,20,24,0.08)',
                borderRadius: 16,
                padding: '24px 24px 28px',
                transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.4s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = '0 18px 40px rgba(16,20,24,0.08)';
                el.style.borderColor = 'rgba(37,99,235,0.3)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(16,20,24,0.08)';
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#2563eb',
                    background: 'rgba(37,99,235,0.08)',
                    borderRadius: 999,
                    padding: '5px 12px',
                  }}
                >
                  {w.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    color: 'rgba(16,20,24,0.4)',
                  }}
                >
                  {w.status}
                </span>
              </div>
              <h4
                style={{
                  fontWeight: 800,
                  fontSize: 17,
                  color: '#101418',
                  margin: '0 0 10px 0',
                  lineHeight: 1.45,
                }}
              >
                {w.title}
              </h4>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5a6472', margin: 0 }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
