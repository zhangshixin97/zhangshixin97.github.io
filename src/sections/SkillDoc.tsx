import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { skillDocs } from '../skillDocs';

marked.setOptions({ gfm: true, breaks: false });

export default function SkillDoc() {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? skillDocs[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const html = useMemo(() => (doc ? marked.parse(doc.markdown) as string : ''), [doc]);

  if (!doc) {
    return (
      <div style={{ minHeight: '100vh', background: '#f7f7f4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <p style={{ color: '#5a6472', fontSize: 15 }}>没有找到这个 Skill 的说明页。</p>
        <Link to="/" style={{ color: '#2563eb', fontSize: 14 }}>← 返回首页</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f4' }}>
      {/* 顶栏 */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(247,247,244,0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(16,20,24,0.07)',
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              letterSpacing: '0.1em',
              color: '#5a6472',
              textDecoration: 'none',
            }}
          >
            ← 返回 Skill 社区
          </Link>
          <a
            href={doc.download}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              borderRadius: 999,
              background: '#101418',
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            下载
          </a>
        </div>
      </div>

      {/* 正文 */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 24px 120px' }}>
        <div
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: '#2563eb',
            marginBottom: 16,
          }}
        >
          SKILL 使用说明
        </div>
        <h1
          style={{
            fontWeight: 900,
            fontSize: 'clamp(30px, 4vw, 44px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#101418',
            margin: '0 0 40px 0',
          }}
        >
          {doc.title}
        </h1>

        <div
          className="skill-doc-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ color: '#3d4652', fontSize: 15, lineHeight: 1.9 }}
        />
      </div>

      <style>{`
        .skill-doc-content h1 { font-size: 26px; font-weight: 800; color: #101418; margin: 48px 0 16px; letter-spacing: -0.01em; }
        .skill-doc-content h2 { font-size: 21px; font-weight: 800; color: #101418; margin: 40px 0 14px; padding-bottom: 10px; border-bottom: 1px solid rgba(16,20,24,0.08); }
        .skill-doc-content h3 { font-size: 17px; font-weight: 700; color: #101418; margin: 28px 0 10px; }
        .skill-doc-content h4 { font-size: 15px; font-weight: 700; color: #101418; margin: 22px 0 8px; }
        .skill-doc-content p { margin: 12px 0; }
        .skill-doc-content ul, .skill-doc-content ol { padding-left: 22px; margin: 12px 0; }
        .skill-doc-content ul { list-style: disc; }
        .skill-doc-content ol { list-style: decimal; }
        .skill-doc-content li { margin: 6px 0; }
        .skill-doc-content strong { color: #101418; font-weight: 700; }
        .skill-doc-content blockquote { margin: 16px 0; padding: 12px 18px; border-left: 3px solid #2563eb; background: rgba(37,99,235,0.05); border-radius: 0 10px 10px 0; color: #3d4652; }
        .skill-doc-content code { font-family: 'GeistMono', monospace; font-size: 13px; background: rgba(16,20,24,0.06); padding: 2px 6px; border-radius: 6px; color: #101418; }
        .skill-doc-content pre { background: #101418; color: #e6e9ee; padding: 18px 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; }
        .skill-doc-content pre code { background: none; color: inherit; padding: 0; font-size: 13px; line-height: 1.7; }
        .skill-doc-content table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 14px; }
        .skill-doc-content th, .skill-doc-content td { border: 1px solid rgba(16,20,24,0.1); padding: 8px 12px; text-align: left; }
        .skill-doc-content th { background: rgba(16,20,24,0.04); font-weight: 700; color: #101418; }
        .skill-doc-content a { color: #2563eb; }
        .skill-doc-content hr { border: none; border-top: 1px solid rgba(16,20,24,0.08); margin: 32px 0; }
      `}</style>
    </div>
  );
}
