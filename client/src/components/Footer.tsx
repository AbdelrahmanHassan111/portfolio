import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      {/* Gradient Border Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-foreground/60 flex items-center justify-center gap-2">
            © 2025 Abdelrahman Hassan • Built with
            <Heart className="text-red-500 fill-red-500" size={16} />
            using React + Vite + Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
