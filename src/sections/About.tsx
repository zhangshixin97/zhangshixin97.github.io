import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { aboutConfig } from '../config';

export default function About() {
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
      { threshold: 0.2 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
          {aboutConfig.sectionLabel}
        </div>
        <h2
          data-reveal
          data-delay="0.1"
          style={{
            fontWeight: 900,
            fontSize: 'clamp(36px, 4.5vw, 68px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#101418',
            margin: '0 0 48px 0',
            textWrap: 'balance',
          }}
        >
          {aboutConfig.title}
        </h2>

        {/* 身份标签 */}
        <div data-reveal data-delay="0.15" className="flex flex-wrap" style={{ gap: 12, marginBottom: 48 }}>
          {aboutConfig.identities.map((id) => (
            <span
              key={id}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#2563eb',
                border: '1px solid rgba(37,99,235,0.35)',
                background: 'rgba(37,99,235,0.06)',
                borderRadius: 999,
                padding: '8px 20px',
              }}
            >
              {id}
            </span>
          ))}
        </div>

        {/* 介绍文字 */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'clamp(28px, 3vw, 48px)', marginBottom: 44 }}
        >
          {aboutConfig.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              data-delay={String(0.15 + i * 0.1)}
              style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.95,
                color: '#3d4652',
                margin: 0,
                textWrap: 'pretty',
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* AI 工具栈 */}
        <div data-reveal className="flex flex-wrap items-center" style={{ gap: 12, marginBottom: 96 }}>
          <span
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              letterSpacing: '0.2em',
              color: 'rgba(16,20,24,0.45)',
              marginRight: 8,
            }}
          >
            {aboutConfig.stackLabel} →
          </span>
          {aboutConfig.stack.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#2563eb',
                border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: 999,
                padding: '8px 18px',
                background: 'rgba(37,99,235,0.05)',
                cursor: 'default',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* 经历时间线 */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 40, marginBottom: 80 }}
        >
          {aboutConfig.milestones.map((m, i) => (
            <div
              key={m.title}
              data-reveal
              data-delay={String(i * 0.12)}
              style={{
                borderTop: '3px solid #101418',
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  color: '#2563eb',
                  marginBottom: 12,
                }}
              >
                {m.period}
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 22,
                  color: '#101418',
                  marginBottom: 10,
                }}
              >
                {m.title}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.8, color: '#5a6472' }}>{m.detail}</div>
            </div>
          ))}
        </div>

        {/* 可交流话题 */}
        <div data-reveal className="flex flex-wrap items-center" style={{ gap: 12 }}>
          <span
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              letterSpacing: '0.2em',
              color: 'rgba(16,20,24,0.45)',
              marginRight: 8,
            }}
          >
            {aboutConfig.topicsLabel} →
          </span>
          {aboutConfig.topics.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#101418',
                border: '1px solid rgba(16,20,24,0.18)',
                borderRadius: 999,
                padding: '8px 18px',
                background: '#f7f7f4',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2563eb';
                (e.currentTarget as HTMLElement).style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(16,20,24,0.18)';
                (e.currentTarget as HTMLElement).style.color = '#101418';
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
