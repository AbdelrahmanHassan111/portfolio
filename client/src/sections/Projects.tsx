import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { useMousePosition } from '@/hooks/useMousePosition';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const mousePosition = useMousePosition();

  const featuredProjects = [
    {
      name: 'CLINEXA',
      description: 'AI-Powered Medical Diagnosis Platform serving 1,000+ medical professionals with 94% clinical accuracy',
      tech: ['XGBoost', 'ResNet50', 'AWS', 'MySQL'],
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      name: 'SageAI',
      description: 'Medical RAG Chatbot System with 95% query relevance using FAISS vector database',
      tech: ['RAG', 'FAISS', 'CUDA', 'LangChain'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'NeoMedica',
      description: 'Medical Knowledge-Based System with Neo4j supporting 10000+ queries/day',
      tech: ['Neo4j', 'Knowledge Graph', 'Python'],
      gradient: 'from-cyan-500 to-teal-500',
    },
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/AbdelrahmanHassan111/repos?per_page=100&sort=pushed')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter((repo: GitHubRepo) => 
            repo.name !== 'AbdelrahmanHassan111' && 
            repo.name !== 'portfolio' &&
            repo.name !== 'skills-introduction-to-github'
          )
          .slice(0, 6);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container">
        <SectionTitle subtitle="Explore my work and contributions">
          Featured Projects
        </SectionTitle>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
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
              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-foreground/80 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            GitHub Repositories
          </h3>
          
          {loading ? (
            <div className="text-center text-foreground/60">Loading repositories...</div>
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
                    rotateY: (mousePosition.x - window.innerWidth / 2) * 0.005,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-foreground flex-1">{repo.name}</h4>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p className="text-sm text-foreground/60 mb-4 flex-grow line-clamp-3">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-blue-400" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={14} /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
