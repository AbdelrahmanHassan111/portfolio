import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import SectionIcons from '@/components/SectionIcons';

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const certificates = [
    {
      title: 'AI Programming with Python',
      issuer: 'Udacity',
      date: 'August 2024',
      skills: ['Python', 'NumPy', 'Pandas', 'PyTorch', 'Neural Networks'],
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI & AWS',
      date: 'July 2024',
      skills: ['LLMs', 'Fine-tuning', 'RLHF', 'Prompt Engineering', 'AWS'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI & Stanford',
      date: 'June 2024',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'TensorFlow'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: 'May 2024',
      skills: ['CNN', 'RNN', 'LSTM', 'Transformers', 'Computer Vision', 'NLP'],
      gradient: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="certificates" className="py-32 relative" ref={ref}>
      <SectionIcons count={10} />
      <div className="container">
        <SectionTitle subtitle="Professional certifications and achievements">
          Certificates
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/20 mb-6">
                    <Award className="text-yellow-400" size={20} />
                    <span className="text-sm font-semibold text-foreground">{cert.issuer}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>

                  <p className="text-foreground/60 mb-6">{cert.date}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-foreground/80 border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
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
