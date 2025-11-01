import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import FlyingIcons from '@/components/FlyingIcons';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Publications from '@/sections/Publications';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <InteractiveBackground />
      <FlyingIcons />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
