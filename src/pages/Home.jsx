import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Skills } from '../components/Skills';
import { Journey } from '../components/Journey';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home = () => {
  // Arriving from another page at "/#work" or "/#contact": the browser looks for the section
  // before React has rendered it, so jump there ourselves once it exists.
  useEffect(() => {
    const target = window.location.hash && document.querySelector(window.location.hash);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' }));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
