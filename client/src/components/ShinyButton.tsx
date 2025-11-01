// @ts-nocheck
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShinyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ShinyButton({ children, onClick, className = '' }: ShinyButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shiny overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          transition: {
            duration: 0.6,
            ease: 'easeInOut',
          },
        }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
