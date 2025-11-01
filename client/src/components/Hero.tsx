import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { SiPython, SiPytorch, SiTensorflow, SiReact, SiOpencv } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { useMousePosition } from '@/hooks/useMousePosition';
import TypingText from '@/components/TypingText';
import TrueFocus from '@/components/TrueFocus';

export default function Hero() {
  const mousePosition = useMousePosition();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const techIcons = [
    { Icon: SiPython, color: 'text-yellow-400', delay: 0 },
    { Icon: SiPytorch, color: 'text-orange-500', delay: 0.2 },
    { Icon: SiTensorflow, color: 'text-orange-400', delay: 0.4 },
    { Icon: SiReact, color: 'text-cyan-400', delay: 0.6 },
    { Icon: SiOpencv, color: 'text-blue-500', delay: 0.8 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map(({ Icon, color, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 360],
              x: mousePosition.x * (0.01 + i * 0.003),
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay,
            }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="container relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glassmorphism Card */}
          <motion.div
            className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-white/3 backdrop-blur-md border border-white/5 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <TrueFocus sentence="Hi I'm Abdelrahman" borderColor="#8b5cf6" glowColor="rgba(139, 92, 246, 0.6)" animationDuration={0.2} pauseBetweenAnimations={0.5} />
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AI Engineer & Researcher
            </motion.p>

            <motion.p
              className="text-base text-foreground/60 mb-6 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Machine Learning Researcher | Vision & NLP Developer
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="/Abdelrahman_Hassan_CV.pdf" download>
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="https://github.com/AbdelrahmanHassan111"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/abdelrahman-hassan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:abdelrahman.h004@gmail.com"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
