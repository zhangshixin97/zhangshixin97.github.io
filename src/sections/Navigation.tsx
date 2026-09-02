import { useEffect, useState } from 'react';
import { siteConfig, navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
      style={{
        height: 72,
        padding: '0 5vw',
        backgroundColor: scrolled ? 'rgba(247, 247, 244, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(16, 20, 24, 0.08)' : 'none',
      }}
    >
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        className="no-underline"
        style={{
          color: '#101418',
          fontFamily: "'GeistMono', monospace",
          fontSize: 15,
          fontWeight: 400,
          letterSpacing: '0.22em',
        }}
      >
        {siteConfig.brandName}
      </a>

      <div className="hidden md:flex items-center" style={{ gap: 40 }}>
        {navigationConfig.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>

      {navigationConfig.ctaText && (
        <a
          href="#footer"
          onClick={(e) => handleClick(e, '#footer')}
          className="hidden md:inline-block no-underline"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#fff',
            background: '#101418',
            padding: '10px 22px',
            borderRadius: 999,
            transition: 'background 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#2563eb';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#101418';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          {navigationConfig.ctaText}
        </a>
      )}
    </nav>
  );
}
