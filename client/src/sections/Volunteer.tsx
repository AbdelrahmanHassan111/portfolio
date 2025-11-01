import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function Volunteer() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      role: 'AI Research Volunteer',
      organization: 'Open Source AI Community',
      period: '2023 - Present',
      description: 'Contributing to open-source AI projects, mentoring junior developers, and participating in research discussions on LLMs and computer vision.',
      impact: 'Helped 50+ developers learn AI/ML concepts',
      icon: Users,
    },
    {
      role: 'Technical Mentor',
      organization: 'University AI Club',
      period: '2022 - 2024',
      description: 'Teaching machine learning fundamentals, organizing workshops on deep learning, and guiding students through their AI projects.',
      impact: 'Mentored 100+ students in AI/ML',
      icon: Heart,
    },
  ];

  return (
    <section id="volunteer" className="py-32 relative bg-white/5" ref={ref}>
      <div className="container">
        <SectionTitle subtitle="Giving back to the community">
          Volunteer Experience
        </SectionTitle>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/20">
                      <exp.icon className="text-pink-400" size={32} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-foreground/60">
                        <span className="font-semibold">{exp.organization}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-foreground/70 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/20">
                        <Heart className="text-pink-400" size={16} />
                        <span className="text-sm font-semibold text-foreground">{exp.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
