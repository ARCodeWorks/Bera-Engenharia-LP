import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Differentiators from './components/Differentiators';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Differentiators />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;