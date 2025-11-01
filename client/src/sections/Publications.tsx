import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Award } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import SectionIcons from '@/components/SectionIcons';

export default function Publications() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="publications" className="py-32 relative bg-white/5" ref={ref}>
      <SectionIcons count={10} />
      <div className="container">
        <SectionTitle subtitle="Research contributions and academic work">
          Publications
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/20 mb-6">
                <Award className="text-yellow-400" size={20} />
                <span className="text-sm font-semibold text-foreground">IEEE Conference</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                End-to-End Optimized Ensemble Model for Alzheimer's Disease Detection
              </h3>

              <div className="flex items-center gap-4 mb-6 text-foreground/60">
                <span className="flex items-center gap-2">
                  <FileText size={18} />
                  IEEE IMCOM 2025
                </span>
                <span>•</span>
                <span>January 2025</span>
              </div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                DOI: <a href="https://doi.org/10.1109/IMCOM64595.2025.10857489" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">10.1109/IMCOM64595.2025.10857489</a>
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                  <p className="text-foreground/70">
                    Achieved <span className="text-purple-400 font-semibold">95.85% accuracy</span> using multimodal ADNI dataset with Gradient Boosting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <p className="text-foreground/70">
                    Implemented explainable AI techniques including <span className="text-blue-400 font-semibold">LIME and SHAP</span> for interpretable results
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                  <p className="text-foreground/70">
                    Developed comprehensive end-to-end ensemble approach for medical diagnosis
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-foreground/60">
                  <span className="font-semibold text-foreground/80">Supported by:</span> National Research Foundation and Ministry of Science and ICT, Korea
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
