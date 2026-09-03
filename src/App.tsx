import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
      <Route path="/skill/:slug" element={<SkillDoc />} />
    </Routes>
  );
}
