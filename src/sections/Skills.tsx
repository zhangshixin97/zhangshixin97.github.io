import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { skillsConfig } from '../config';

export default function Skills() {
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

  return (
    <section
      id="alumni"
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
          {skillsConfig.sectionLabel}
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 24, marginBottom: 80 }}>
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
            {skillsConfig.title}
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
            {skillsConfig.subtitle}
          </p>
        </div>

        {skillsConfig.groups.map((group) => (
          <div key={group.name} style={{ marginBottom: 88 }}>
            <div
              data-reveal
              className="flex items-baseline"
              style={{ gap: 16, marginBottom: 40 }}
            >
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 22,
                  color: '#101418',
                  letterSpacing: '-0.01em',
                }}
              >
                {group.name}
              </span>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  color: '#2563eb',
                }}
              >
                {group.note}
              </span>
              <span style={{ flex: 1, height: 1, background: 'rgba(16,20,24,0.1)' }} />
            </div>

            {group.categories.map((cat) => (
              <div key={cat.name} style={{ marginBottom: 48 }}>
                <div
                  data-reveal
                  className="flex items-center"
                  style={{ gap: 10, marginBottom: 20 }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: '#2563eb',
                      display: 'block',
                    }}
                  />
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#3d4652',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {cat.name}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
                  {cat.items.map((item, i) => (
                    <div
                      key={item.title}
                      data-reveal
                      data-delay={String(i * 0.08)}
                      style={{
                        background: '#f7f7f4',
                        border: '1px solid rgba(16,20,24,0.07)',
                        borderRadius: 16,
                        overflow: 'hidden',
                        cursor: 'default',
                        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = 'translateY(-6px)';
                        el.style.boxShadow = '0 20px 44px rgba(16,20,24,0.10)';
                        const cover = el.querySelector<HTMLElement>('[data-cover]');
                        if (cover) cover.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = 'translateY(0)';
                        el.style.boxShadow = 'none';
                        const cover = el.querySelector<HTMLElement>('[data-cover]');
                        if (cover) cover.style.transform = 'scale(1)';
                      }}
                    >
                      {/* 渐变封面 */}
                      <div style={{ overflow: 'hidden', aspectRatio: '16/10' }}>
                        <div
                          data-cover
                          style={{
                            width: '100%',
                            height: '100%',
                            background: item.hue,
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: 16,
                            transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                            position: 'relative',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'GeistMono', monospace",
                              fontSize: 11,
                              letterSpacing: '0.2em',
                              color: 'rgba(255,255,255,0.85)',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item.tag}
                          </span>
                          <span
                            style={{
                              position: 'absolute',
                              top: 12,
                              right: 16,
                              fontFamily: "'GeistMono', monospace",
                              fontSize: 10,
                              letterSpacing: '0.15em',
                              color: 'rgba(255,255,255,0.6)',
                            }}
                          >
                            SKILL
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: '20px 20px 24px' }}>
                        <h4
                          style={{
                            fontWeight: 800,
                            fontSize: 17,
                            color: '#101418',
                            margin: '0 0 8px 0',
                            lineHeight: 1.4,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5a6472', margin: 0 }}>
                          {item.desc}
                        </p>
                        {item.download && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14 }}>
                            <a
                              href={item.download}
                              download
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '8px 14px',
                                borderRadius: 999,
                                background: '#101418',
                                color: '#ffffff',
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textDecoration: 'none',
                                transition: 'background 0.25s ease, transform 0.25s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#2563eb';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#101418';
                                e.currentTarget.style.transform = 'translateY(0)';
                              }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                              </svg>
                              下载
                            </a>
                            {item.doc && (
                              <Link
                                to={item.doc}
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  letterSpacing: '0.04em',
                                  color: '#2563eb',
                                  textDecoration: 'none',
                                }}
                              >
                                使用说明 →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
