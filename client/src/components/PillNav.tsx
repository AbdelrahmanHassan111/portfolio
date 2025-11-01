import { motion } from 'framer-motion';
import { useState } from 'react';

interface PillNavProps {
  items: { label: string; href: string }[];
}

export default function PillNav({ items }: PillNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (href: string, index: number) => {
    setActiveIndex(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative px-6 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
        {/* Liquid Glass Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20" />
        
        <div className="relative flex items-center gap-2">
          {items.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href, index)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeIndex === index
                  ? 'text-white'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="pill-nav-active"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
