import { motion, useMotionValue } from 'framer-motion';
import { Home, User, Code, FileText, Award, Heart, Mail, Briefcase } from 'lucide-react';
import ShinyButton from './ShinyButton';

export default function DockNav() {
  const mouseX = useMotionValue(Infinity);

  const navItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Skills', href: '#skills' },
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: FileText, label: 'Publications', href: '#publications' },
    { icon: Award, label: 'Certificates', href: '#certificates' },
    { icon: Heart, label: 'Volunteer', href: '#volunteer' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="relative p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 border border-white/10 hover:border-white/30 transition-all group"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
              
              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-foreground/90 text-background text-xs font-semibold whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
