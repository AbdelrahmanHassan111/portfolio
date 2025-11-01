import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function InteractiveBackground() {
  const mousePosition = useMousePosition();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          right: '10%',
          top: '40%',
        }}
        animate={{
          x: mousePosition.x * -0.025,
          y: mousePosition.y * -0.025,
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
          left: '50%',
          bottom: '10%',
        }}
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * -0.02,
          scale: [1, 1.25, 1],
        }}
        transition={{ duration: 4.5, repeat: Infinity }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Cursor Trail Effect */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </div>
  );
}
