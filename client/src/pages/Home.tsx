import PillNav from '@/components/PillNav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import FlyingIconsExpanded from '@/components/FlyingIconsExpanded';
import ScrollProgress from '@/components/ScrollProgress';
import SplashCursor from '@/components/SplashCursor';
import TextCursor from '@/components/TextCursor';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Publications from '@/sections/Publications';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SplashCursor />
      <TextCursor text="✨" spacing={100} maxPoints={8} />
      <InteractiveBackground />
      <FlyingIconsExpanded />
      <ScrollProgress />
      <div className="relative z-10">
        <div id="home" />
        <PillNav items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Publications', href: '#publications' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ]} />
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
