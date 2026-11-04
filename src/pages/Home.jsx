import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Skills } from '../components/Skills';
import { Journey } from '../components/Journey';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home = () => (
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
