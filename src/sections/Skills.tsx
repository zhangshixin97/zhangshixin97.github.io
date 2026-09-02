import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { skillsConfig } from '../config';

const ALL = '全部';

export default function Skills() {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const firstReveal = useRef(false);
  const [filter, setFilter] = useState<string>(ALL);

  // 所有分类（去重，带计数），用于筛选 Tab
  const tabs = useMemo(() => {
    const counts = new Map<string, number>();
    let total = 0;
    skillsConfig.groups.forEach((g) =>
      g.categories.forEach((c) => {
        counts.set(c.name, (counts.get(c.name) || 0) + c.items.length);
        total += c.items.length;
      })
    );
    return [
      { name: ALL, count: total },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, []);

  // 按筛选条件过滤后的分组
  const visibleGroups = useMemo(
    () =>
      skillsConfig.groups
        .map((g) => ({
          ...g,
          categories: g.categories.filter((c) => filter === ALL || c.name === filter),
        }))
        .filter((g) => g.categories.length > 0),
    [filter]
  );

  const animateCards = () => {
    const cards = gridRef.current?.querySelectorAll('[data-card]');
    if (!cards || cards.length === 0) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 22, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.035, ease: 'power3.out', overwrite: 'auto', clearProps: 'scale' }
    );
  };

  // 首次进入视口时的 stagger 揭示
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-card]');
    gsap.set(cards, { opacity: 0, y: 22 });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            firstReveal.current = true;
            animateCards();
            io.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 筛选切换时重排动画
  useEffect(() => {
    if (!firstReveal.current) return;
    animateCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // 区块标题的滚动揭示
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
      style={{ padding: '120px 5vw', background: '#ffffff' }}
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

        {/* 分类筛选 Tab（横向可滚动，移动端友好） */}
        <div
          data-reveal
          className="skill-tabs"
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 6,
            marginBottom: 40,
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {tabs.map((tab) => {
            const active = filter === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setFilter(tab.name)}
                style={{
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 16px',
                  borderRadius: 999,
                  border: active ? '1px solid #101418' : '1px solid rgba(16,20,24,0.12)',
                  background: active ? '#101418' : '#ffffff',
                  color: active ? '#ffffff' : '#3d4652',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.borderColor = 'rgba(16,20,24,0.35)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.borderColor = 'rgba(16,20,24,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {tab.name}
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 10,
                    color: active ? 'rgba(255,255,255,0.65)' : '#9aa3af',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 卡片区（key=filter 触发重排动画） */}
        <div ref={gridRef} key={filter}>
          {visibleGroups.map((group) => (
            <div key={group.name} style={{ marginBottom: 64 }}>
              <div className="flex items-baseline" style={{ gap: 16, marginBottom: 32 }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: 20,
                    color: '#101418',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.name}
                </span>
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    color: '#2563eb',
                  }}
                >
                  {group.note}
                </span>
                <span style={{ flex: 1, height: 1, background: 'rgba(16,20,24,0.1)' }} />
              </div>

              {group.categories.map((cat) => (
                <div key={cat.name} style={{ marginBottom: 36 }}>
                  <div className="flex items-center" style={{ gap: 10, marginBottom: 16 }}>
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
                        fontSize: 14,
                        color: '#3d4652',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {cat.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5" style={{ gap: 14 }}>
                    {cat.items.map((item) => (
                      <div
                        key={item.title}
                        data-card
                        style={{
                          background: '#f7f7f4',
                          border: '1px solid rgba(16,20,24,0.07)',
                          borderRadius: 14,
                          overflow: 'hidden',
                          cursor: 'default',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = 'translateY(-5px)';
                          el.style.boxShadow = '0 16px 36px rgba(16,20,24,0.10)';
                          el.style.borderColor = 'rgba(37,99,235,0.25)';
                          const cover = el.querySelector<HTMLElement>('[data-cover]');
                          if (cover) cover.style.transform = 'scale(1.06)';
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = 'translateY(0)';
                          el.style.boxShadow = 'none';
                          el.style.borderColor = 'rgba(16,20,24,0.07)';
                          const cover = el.querySelector<HTMLElement>('[data-cover]');
                          if (cover) cover.style.transform = 'scale(1)';
                        }}
                      >
                        {/* 渐变封面 */}
                        <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                          <div
                            data-cover
                            style={{
                              width: '100%',
                              height: '100%',
                              background: item.hue,
                              display: 'flex',
                              alignItems: 'flex-end',
                              padding: 12,
                              transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                              position: 'relative',
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'GeistMono', monospace",
                                fontSize: 10,
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
                                top: 10,
                                right: 12,
                                fontFamily: "'GeistMono', monospace",
                                fontSize: 9,
                                letterSpacing: '0.15em',
                                color: 'rgba(255,255,255,0.6)',
                              }}
                            >
                              SKILL
                            </span>
                          </div>
                        </div>
                        <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <h4
                            style={{
                              fontWeight: 800,
                              fontSize: 15,
                              color: '#101418',
                              margin: '0 0 6px 0',
                              lineHeight: 1.4,
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: 12,
                              lineHeight: 1.7,
                              color: '#5a6472',
                              margin: 0,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              minHeight: 41,
                            }}
                          >
                            {item.desc}
                          </p>
                          {item.author && (
                            <div
                              style={{
                                fontSize: 10,
                                lineHeight: 1.5,
                                color: '#9aa3af',
                                letterSpacing: '0.02em',
                                marginTop: 6,
                              }}
                            >
                              {item.author} · 本站收录分享
                            </div>
                          )}
                          {item.download && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 12 }}>
                              <a
                                href={item.download}
                                download
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 5,
                                  padding: '6px 12px',
                                  borderRadius: 999,
                                  background: '#101418',
                                  color: '#ffffff',
                                  fontSize: 11,
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
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
                                    fontSize: 11,
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
      </div>
      <style>{`
        .skill-tabs::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
