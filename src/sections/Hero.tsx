import { heroConfig } from '../config';

export default function Hero() {
  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden kv-grid kv-grain"
      style={{
        minHeight: '100vh',
        background: '#f7f7f4',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── 玻璃晶体装饰 ── */}
      <div
        className="kv-crystal kv-float"
        style={{
          width: 180,
          height: 180,
          top: '12%',
          right: '38%',
          background:
            'radial-gradient(circle at 30% 30%, rgba(147,197,253,0.9), rgba(37,99,235,0.35) 70%)',
          boxShadow: '0 24px 60px rgba(37,99,235,0.18), inset 0 0 30px rgba(255,255,255,0.6)',
        }}
      />
      <div
        className="kv-crystal kv-float-slow"
        style={{
          width: 110,
          height: 110,
          bottom: '26%',
          right: '3%',
          background:
            'radial-gradient(circle at 30% 30%, rgba(196,181,253,0.95), rgba(124,58,237,0.3) 70%)',
          boxShadow: '0 20px 50px rgba(124,58,237,0.16), inset 0 0 24px rgba(255,255,255,0.6)',
        }}
      />
      <div
        className="kv-crystal kv-float"
        style={{
          width: 76,
          height: 76,
          top: '58%',
          left: '44%',
          animationDelay: '-4s',
          background:
            'radial-gradient(circle at 30% 30%, rgba(253,186,116,0.95), rgba(234,88,12,0.28) 70%)',
          boxShadow: '0 16px 40px rgba(234,88,12,0.15), inset 0 0 20px rgba(255,255,255,0.6)',
        }}
      />

      {/* ── 右侧竖排英文点缀 ── */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          right: 18,
          top: '50%',
          transform: 'translateY(-50%)',
          writingMode: 'vertical-rl',
          fontFamily: "'GeistMono', monospace",
          fontSize: 11,
          letterSpacing: 6,
          color: 'rgba(16,20,24,0.3)',
          zIndex: 5,
        }}
      >
        AI AGENT · PMS · OTA · WORKFLOW
      </div>

      {/* ── 主内容 ── */}
      <div
        className="relative flex flex-col lg:flex-row flex-1"
        style={{ zIndex: 10, paddingTop: 80 }}
      >
        {/* 左侧文字 */}
        <div
          className="flex flex-col justify-center"
          style={{
            flex: '1 1 56%',
            padding: 'clamp(40px,6vh,80px) clamp(24px,3vw,48px) clamp(24px,4vh,48px) 5vw',
          }}
        >
          <div
            className="kv-rise"
            style={{
              animationDelay: '0.1s',
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: 'clamp(12px,1.1vw,15px)',
              letterSpacing: '0.35em',
              color: '#2563eb',
              marginBottom: 'clamp(20px,3vh,36px)',
            }}
          >
            {heroConfig.eyebrow}
          </div>

          <h1
            className="kv-rise"
            style={{
              animationDelay: '0.25s',
              fontWeight: 900,
              fontSize: 'clamp(64px, 8.5vw, 140px)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              color: '#101418',
              margin: '0 0 clamp(24px,3.5vh,44px) 0',
              width: 'fit-content',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ color: '#2563eb', fontWeight: 300, marginRight: '0.04em' }}>/</span>
            {heroConfig.title}
            <span style={{ color: '#2563eb' }}>.</span>
          </h1>

          <p
            className="kv-rise"
            style={{
              animationDelay: '0.4s',
              fontWeight: 600,
              fontSize: 'clamp(16px, 1.6vw, 24px)',
              lineHeight: 1.6,
              color: '#101418',
              margin: '0 0 10px 0',
            }}
          >
            {heroConfig.subtitleLine1}
          </p>
          <p
            className="kv-rise"
            style={{
              animationDelay: '0.5s',
              fontFamily: "'GeistMono', monospace",
              fontWeight: 300,
              fontSize: 'clamp(11px, 1vw, 14px)',
              letterSpacing: '0.08em',
              color: 'rgba(16,20,24,0.45)',
              margin: '0 0 clamp(24px,3.5vh,40px) 0',
            }}
          >
            {heroConfig.subtitleLine2}
          </p>

          <div
            className="kv-rise"
            style={{
              animationDelay: '0.65s',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <span style={{ width: 40, height: 3, background: '#2563eb', display: 'block' }} />
            <span
              style={{
                fontWeight: 600,
                fontSize: 'clamp(14px, 1.3vw, 18px)',
                color: '#101418',
              }}
            >
              {heroConfig.motto}
            </span>
          </div>
        </div>

        {/* 右侧人像大图 */}
        <div
          className="relative kv-rise"
          style={{
            animationDelay: '0.35s',
            flex: '0 0 42%',
            minHeight: '55vh',
          }}
        >
          <img
            src={heroConfig.portrait}
            alt={heroConfig.portraitAlt}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 62%, transparent 98%), linear-gradient(to right, transparent 0%, black 14%)',
              WebkitMaskComposite: 'source-in',
              maskImage:
                'linear-gradient(to bottom, black 62%, transparent 98%), linear-gradient(to right, transparent 0%, black 14%)',
              maskComposite: 'intersect',
            }}
          />
        </div>
      </div>

      {/* ── 底部数据条 ── */}
      <div
        className="relative kv-rise"
        style={{
          animationDelay: '0.85s',
          zIndex: 10,
          padding: '0 5vw clamp(24px,4vh,44px)',
          display: 'flex',
          gap: 'clamp(28px,5vw,72px)',
          flexWrap: 'wrap',
        }}
      >
        {heroConfig.stats.map((s) => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: 'clamp(22px,2.2vw,32px)',
                color: '#101418',
                lineHeight: 1,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: '0.12em',
                color: 'rgba(16,20,24,0.5)',
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
