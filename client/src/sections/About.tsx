import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '@/components/SectionTitle';
import { SiPython, SiPytorch, SiTensorflow, SiOpencv, SiFastapi, SiMysql, SiStreamlit, SiHuggingface, SiReact } from 'react-icons/si';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    { Icon: SiPython, name: 'Python', color: 'text-yellow-400' },
    { Icon: SiPytorch, name: 'PyTorch', color: 'text-orange-500' },
    { Icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-400' },
    { Icon: SiOpencv, name: 'OpenCV', color: 'text-blue-500' },
    { Icon: SiFastapi, name: 'FastAPI', color: 'text-green-400' },
    { Icon: SiMysql, name: 'MySQL', color: 'text-blue-400' },
    { Icon: SiStreamlit, name: 'Streamlit', color: 'text-red-400' },
    { Icon: SiHuggingface, name: 'HuggingFace', color: 'text-yellow-300' },
    { Icon: SiReact, name: 'React', color: 'text-cyan-400' },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container">
        <SectionTitle subtitle="Get to know me better">
          About Me
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              AI Engineering student with <span className="text-purple-400 font-semibold">2+ years</span> of hands-on experience in machine learning, deep learning, and natural language processing. 
              Published <span className="text-cyan-400 font-semibold">IEEE researcher</span> achieving 95.85% accuracy in Alzheimer's detection using ensemble methods.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Industry experience at <span className="text-blue-400 font-semibold">Outlier AI</span> specializing in LLM evaluation, prompt engineering, and RLHF. 
              Expert at delivering production-ready AI solutions including medical diagnosis platforms, RAG systems, and edge AI applications.
            </p>
          </motion.div>

          {/* Animated Skill Bubbles */}
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map(({ Icon, name, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="group relative"
              >
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all cursor-pointer">
                  <Icon className={`${color} text-4xl group-hover:scale-110 transition-transform`} />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-foreground/60 whitespace-nowrap"
                >
                  {name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
