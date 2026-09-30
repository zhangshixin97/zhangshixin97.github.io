import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { footerConfig, navigationConfig, siteConfig } from '../config';

const wechat = 'zhang916148898';
const phone = '17750928291';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const element = document.querySelector(href);
    if (!element) return;
    event.preventDefault();
    element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  const openContact = () => {
    setCopyStatus('');
    dialogRef.current?.showModal();
  };

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(wechat);
      setCopyStatus('微信号已复制，请到微信添加好友。');
    } catch {
      setCopyStatus('未能自动复制，请长按下方微信号手动复制。');
    }
  };

  return (
    <>
      <nav aria-label="主导航" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between" style={{ height: 72, padding: '0 5vw', gap: 12, background: scrolled ? 'rgba(247,247,244,0.95)' : '#f7f7f4', borderBottom: scrolled ? '1px solid rgba(16,20,24,0.08)' : 'none' }}>
        <a href="#hero" onClick={(event) => handleClick(event, '#hero')} className="no-underline" style={{ color: '#101418', fontSize: 14, letterSpacing: '0.12em' }}>{siteConfig.brandName}</a>
        <div className="hidden md:flex items-center" style={{ gap: 28 }}>
          {navigationConfig.links.map((link) => <a key={link.label} href={link.href} onClick={(event) => handleClick(event, link.href)} className="nav-link">{link.label}</a>)}
        </div>
        <button type="button" onClick={openContact} style={{ minHeight: 44, padding: '10px 18px', border: 0, borderRadius: 999, background: '#101418', color: '#fff', fontSize: 13, whiteSpace: 'nowrap', cursor: 'pointer' }}>{navigationConfig.ctaText || '合作咨询'}</button>
      </nav>

      <div className="md:hidden" style={{ height: 'calc(76px + env(safe-area-inset-bottom, 0px))', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40, padding: '12px 5vw', paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))', background: '#f7f7f4', borderTop: '1px solid #dce1e8' }}>
        <div className="flex" style={{ gap: 10 }}>
          <button type="button" onClick={openContact} style={{ flex: 1, minHeight: 48, background: '#2563eb', color: '#fff', border: 0, borderRadius: 12, fontWeight: 600, cursor: 'pointer' }}>蓝皮书 · 试行价 1 元</button>
          <a href={`tel:${phone}`} aria-label="拨打合作咨询电话" style={{ minHeight: 48, display: 'flex', alignItems: 'center', padding: '0 16px', border: '1px solid #ccd4df', borderRadius: 12, color: '#101418', textDecoration: 'none' }}>电话咨询</a>
        </div>
      </div>

      <dialog ref={dialogRef} aria-labelledby="contact-title" aria-describedby="contact-note" style={{ margin: 'auto', width: 'min(420px, calc(100vw - 32px))', maxHeight: 'calc(100dvh - 32px)', overflowY: 'auto', padding: 28, border: 0, borderRadius: 20, background: '#fff', color: '#101418' }}>
        <button type="button" onClick={() => dialogRef.current?.close()} aria-label="关闭联系窗口" style={{ position: 'absolute', top: 10, right: 12, minWidth: 44, minHeight: 44, border: 0, background: 'transparent', cursor: 'pointer' }}>关闭</button>
        <h2 id="contact-title" style={{ marginTop: 24, fontSize: 24 }}>加微信，与世鑫联系</h2>
        <p id="contact-note">蓝皮书试行价 1 元。加微信备注【蓝皮书】，确认支付与领取方式；合作请说明培训、经营顾问或 AI 工作流需求。</p>
        <img src={`/${footerConfig.qrImage.replace(/^\//, '')}`} alt="张世鑫微信二维码" width="180" height="180" style={{ display: 'block', margin: '20px auto', objectFit: 'contain' }} />
        <p style={{ textAlign: 'center', userSelect: 'text' }}>微信号：{wechat}</p>
        <button type="button" onClick={copyWechat} style={{ width: '100%', minHeight: 48, border: 0, borderRadius: 12, background: '#2563eb', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>复制微信号</button>
        <p role="status" style={{ minHeight: 24, fontSize: 14 }}>{copyStatus}</p>
        <a href={`tel:${phone}`} style={{ color: '#2563eb' }}>电话咨询：{phone}</a>
      </dialog>
      <style>{`dialog::backdrop { background: rgba(10,20,48,.6); } @media (max-width:767px) { #footer { padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px)) !important; } }`}</style>
    </>
  );
}
