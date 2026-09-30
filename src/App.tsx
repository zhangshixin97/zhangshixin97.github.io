import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Curriculum from './sections/Curriculum';
import Skills from './sections/Skills';
import Avatar from './sections/Avatar';
import Blueprint from './sections/Blueprint';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import SkillDoc from './sections/SkillDoc';

function HomePage() {
  return (
    <div
      style={{
        background: '#f7f7f4',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navigation />

      <main>
        <Hero />
        <Services />
        <About />
        <Curriculum />
        <Blueprint />
        <Skills />
        <Avatar />
        <Footer />
      </main>
    </div>
  );
}


function NotFoundPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f7f4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ maxWidth: 560, textAlign: 'center' }}>
        <p style={{ color: '#2563eb', fontWeight: 700 }}>404</p>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: '16px 0' }}>这个页面没有找到</h1>
        <p style={{ color: '#5a6472', lineHeight: 1.8 }}>链接可能已经调整，或地址输入有误。你可以返回首页，查看合作服务或免费实战资源。</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 24 }}>
          <a href="/" style={{ minHeight: 48, padding: '12px 24px', borderRadius: 12, color: '#fff', background: '#2563eb', textDecoration: 'none' }}>返回首页</a>
          <a href="/#alumni" style={{ minHeight: 48, padding: '12px 24px', borderRadius: 12, color: '#2563eb', border: '1px solid #ccd4df', textDecoration: 'none' }}>查看 Skill 资源</a>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
      <Route path="/skill/:slug" element={<SkillDoc />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
