import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useMousePosition } from '@/hooks/useMousePosition';

interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
}

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const mousePosition = useMousePosition();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    fetch('https://api.github.com/users/AbdelrahmanHassan111/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        const filteredRepos = data
          .filter((repo: any) => 
            repo.name !== 'AbdelrahmanHassan111' && 
            repo.name !== 'portfolio' &&
            repo.name !== 'skills-introduction-to-github' &&
            !repo.fork
          )
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            stargazerCount: repo.stargazers_count,
            forkCount: repo.forks_count,
            updatedAt: repo.updated_at,
          }));
        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              AH
            </motion.h1>
            <div className="flex gap-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div 
          className="container text-center z-10"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              animate={{
                x: (mousePosition.x - window.innerWidth / 2) * 0.01,
                y: (mousePosition.y - window.innerHeight / 2) * 0.01,
              }}
            >
              <span className="text-gradient glow">Abdelrahman Hassan</span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AI Engineer • Machine Learning Engineer • Data Scientist
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Published IEEE researcher specializing in LLM evaluation, medical AI, and production-ready solutions
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/30 text-4xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  x: mousePosition.x * (0.01 + i * 0.002),
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {['🤖', '🧠', '💻', '📊', '🔬', '⚡'][i]}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection repos={repos} loading={loading} mousePosition={mousePosition} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-gradient">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI Engineering student with 2+ years of hands-on experience in machine learning, deep learning, and natural language processing. Published IEEE researcher achieving 95.85% accuracy in Alzheimer's detection using ensemble methods. Industry experience at Outlier AI specializing in LLM evaluation, prompt engineering, and RLHF.
              </p>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <p className="text-lg font-semibold">Bachelor of Engineering</p>
              <p className="text-muted-foreground">Artificial Intelligence Engineering</p>
              <p className="text-sm text-muted-foreground mt-2">Galala University, Suez, Egypt</p>
              <p className="text-sm text-muted-foreground">2022 - 2027</p>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Publications</h3>
              <p className="text-lg font-semibold">End-to-End Optimized Ensemble Model for Alzheimer's Disease Detection</p>
              <p className="text-muted-foreground">IEEE IMCOM 2025 (DOI: 10.1109/IMCOM64595.2025.10857489)</p>
              <p className="text-sm text-muted-foreground mt-2">
                Achieved 95.85% accuracy using multimodal ADNI dataset with Gradient Boosting and explainable AI techniques (LIME, SHAP)
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    { category: 'Programming', items: ['Python', 'C++', 'SQL', 'MATLAB'] },
    { category: 'Machine Learning', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost'] },
    { category: 'Deep Learning', items: ['CNN', 'RNN', 'LSTM', 'Transformers', 'GANs'] },
    { category: 'NLP & LLMs', items: ['BERT', 'GPT', 'LangChain', 'RAG Systems', 'RLHF'] },
    { category: 'Computer Vision', items: ['OpenCV', 'YOLO', 'ResNet', 'Medical Imaging'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
  ];

  return (
    <section id="skills" className="py-32 bg-card/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-gradient">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all card-3d h-full">
                  <h3 className="text-xl font-bold mb-4 text-primary">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection({ repos, loading, mousePosition }: { repos: GitHubRepo[], loading: boolean, mousePosition: { x: number, y: number } }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const featuredProjects = [
    {
      name: 'CLINEXA',
      description: 'AI-Powered Medical Diagnosis Platform serving 1,000+ medical professionals with 94% clinical accuracy using XGBoost and ResNet50/SWIN Transformer',
      tech: ['XGBoost', 'ResNet50', 'AWS', 'MySQL'],
    },
    {
      name: 'SageAI',
      description: 'Medical RAG Chatbot System with 95% query relevance using FAISS vector database and CUDA acceleration',
      tech: ['RAG', 'FAISS', 'CUDA', 'LangChain'],
    },
    {
      name: 'NeoMedica',
      description: 'Medical Knowledge-Based System with Neo4j supporting 10000+ queries/day, featuring symptom checker and interactive visualization',
      tech: ['Neo4j', 'Knowledge Graph', 'Python'],
    },
  ];

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-gradient">Featured Projects</h2>
          
          {/* Featured Projects */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all h-full card-3d">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repositories */}
          <h3 className="text-3xl font-bold mb-8 text-center">GitHub Repositories</h3>
          {loading ? (
            <div className="text-center text-muted-foreground">Loading repositories...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: (mousePosition.x - window.innerWidth / 2) * 0.01,
                    rotateX: -(mousePosition.y - window.innerHeight / 2) * 0.01,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all h-full flex flex-col card-3d">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-primary">{repo.name}</h4>
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{repo.description}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star size={14} /> {repo.stargazerCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} /> {repo.forkCount}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="contact" className="py-32 bg-card/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex gap-6 justify-center">
            <motion.a
              href="mailto:abdelrahman.h004@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-card border border-border rounded-full hover:border-primary transition-colors"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/AbdelrahmanHassan111"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-card border border-border rounded-full hover:border-primary transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdelrahman-hassan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-card border border-border rounded-full hover:border-primary transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
          <motion.div
            className="mt-12 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p>📍 Cairo, Egypt</p>
            <p>📧 abdelrahman.h004@gmail.com</p>
            <p>📱 +20 1117097127</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
