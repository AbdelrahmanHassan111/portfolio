import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '@/components/SectionTitle';
import { 
  SiPython, SiCplusplus, SiMysql, SiPytorch, SiTensorflow, SiScikitlearn,
  SiOpencv, SiAmazon, SiGooglecloud, SiDocker, SiGit, SiFastapi,
  SiStreamlit, SiHuggingface, SiNeo4J, SiKubernetes
} from 'react-icons/si';
import { Brain, Sparkles } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { Icon: SiPython, name: 'Python', color: 'text-yellow-400' },
        { Icon: SiCplusplus, name: 'C++', color: 'text-blue-500' },
        { Icon: SiMysql, name: 'SQL', color: 'text-blue-400' },
        { Icon: Brain, name: 'MATLAB', color: 'text-orange-400' },
      ],
    },
    {
      title: 'ML & DL Frameworks',
      skills: [
        { Icon: SiPytorch, name: 'PyTorch', color: 'text-orange-500' },
        { Icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-400' },
        { Icon: SiScikitlearn, name: 'Scikit-learn', color: 'text-blue-400' },
        { Icon: Brain, name: 'XGBoost', color: 'text-purple-400' },
        { Icon: Sparkles, name: 'Ensemble Methods', color: 'text-cyan-400' },
      ],
    },
    {
      title: 'NLP & LLMs',
      skills: [
        { Icon: Brain, name: 'BERT/GPT/T5', color: 'text-green-400' },
        { Icon: SiHuggingface, name: 'HuggingFace', color: 'text-yellow-400' },
        { Icon: Brain, name: 'LangChain', color: 'text-green-500' },
        { Icon: Brain, name: 'RAG Systems', color: 'text-purple-400' },
        { Icon: Sparkles, name: 'RLHF', color: 'text-orange-400' },
      ],
    },
    {
      title: 'Computer Vision',
      skills: [
        { Icon: SiOpencv, name: 'OpenCV', color: 'text-blue-500' },
        { Icon: Brain, name: 'YOLO', color: 'text-purple-400' },
        { Icon: Brain, name: 'ResNet', color: 'text-cyan-400' },
        { Icon: Brain, name: 'Medical Imaging', color: 'text-green-400' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { Icon: SiAmazon, name: 'AWS', color: 'text-orange-400' },
        { Icon: Brain, name: 'Azure', color: 'text-blue-500' },
        { Icon: SiGooglecloud, name: 'GCP', color: 'text-blue-400' },
        { Icon: SiDocker, name: 'Docker', color: 'text-blue-400' },
        { Icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-500' },
        { Icon: SiGit, name: 'CI/CD', color: 'text-purple-400' },
      ],
    },
    {
      title: 'Databases & AI Tools',
      skills: [
        { Icon: SiMysql, name: 'MySQL', color: 'text-blue-400' },
        { Icon: Brain, name: 'FAISS', color: 'text-purple-400' },
        { Icon: SiNeo4J, name: 'Neo4j', color: 'text-blue-500' },
        { Icon: Sparkles, name: 'SHAP/LIME', color: 'text-cyan-400' },
        { Icon: Brain, name: 'CrewAI', color: 'text-pink-400' },
      ],
    },
    {
      title: 'Web & APIs',
      skills: [
        { Icon: SiFastapi, name: 'FastAPI', color: 'text-green-400' },
        { Icon: SiStreamlit, name: 'Streamlit', color: 'text-red-400' },
      ],
    },
  ];

  const currentlyLearning = [
    { name: 'Vision Transformers', icon: '👁️', color: 'from-purple-400 to-pink-400' },
    { name: 'Diffusion Models', icon: '🎨', color: 'from-blue-400 to-cyan-400' },
    { name: 'Multi-Agent Systems', icon: '🤖', color: 'from-green-400 to-teal-400' },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container">
        <SectionTitle subtitle="Technologies and tools I work with">
          Technical Skills
        </SectionTitle>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all h-full">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map(({ Icon, name, color }, j) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                    >
                      <Icon className={`${color} text-3xl group-hover:scale-110 transition-transform`} />
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/20 mb-4">
              <Sparkles className="text-yellow-400" size={20} />
              <span className="text-sm font-semibold text-foreground">Currently Learning</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentlyLearning.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all text-center group cursor-pointer">
                  <div className={`text-5xl mb-4 group-hover:scale-125 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
