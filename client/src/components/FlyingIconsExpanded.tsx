import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { 
  SiPython, SiPytorch, SiTensorflow, SiReact, SiOpencv, SiDocker,
  SiGit, SiFastapi, SiStreamlit, SiScikitlearn, SiNumpy, SiPandas,
  SiJupyter, SiKeras, SiAmazon, SiGooglecloud, SiMongodb, SiPostgresql,
  SiRedis, SiNginx, SiKubernetes, SiJavascript, SiTypescript, SiNodedotjs,
  SiVite, SiTailwindcss, SiFramer, SiGithub, SiLinux, SiFlask,
  SiApacheairflow, SiApachespark, SiDask, SiRay, SiMlflow,
  SiGrafana, SiPrometheus, SiElasticsearch, SiKibana,
  SiPostman, SiSwagger, SiGraphql, SiApachekafka,
  SiGitlab, SiJenkins, SiCircleci,
  SiTerraform, SiAnsible
} from 'react-icons/si';
import { 
  Brain, Cpu, Database, Zap, Code, Sparkles, Network, Bot,
  Cloud, Server, Container, GitBranch, Terminal, Workflow,
  Activity, BarChart, LineChart, PieChart, TrendingUp,
  Layers, Box, Package, Boxes, Cog, Settings
} from 'lucide-react';

export default function FlyingIconsExpanded() {
  const mousePosition = useMousePosition();

  // 60+ AI/ML/MLOps icons
  const icons = [
    // Core AI/ML Frameworks
    { Icon: SiPytorch, color: 'text-orange-500', x: 5, y: 15 },
    { Icon: SiTensorflow, color: 'text-orange-400', x: 92, y: 8 },
    { Icon: SiKeras, color: 'text-red-500', x: 15, y: 75 },
    { Icon: SiScikitlearn, color: 'text-orange-600', x: 88, y: 82 },
    
    // Python & Data Science
    { Icon: SiPython, color: 'text-blue-400', x: 10, y: 45 },
    { Icon: SiNumpy, color: 'text-blue-500', x: 85, y: 45 },
    { Icon: SiPandas, color: 'text-purple-600', x: 25, y: 25 },
    { Icon: SiJupyter, color: 'text-orange-500', x: 75, y: 65 },
    
    // Computer Vision & NLP
    { Icon: SiOpencv, color: 'text-green-500', x: 50, y: 10 },
    { Icon: Brain, color: 'text-purple-400', x: 48, y: 88 },
    { Icon: Bot, color: 'text-cyan-400', x: 20, y: 55 },
    
    // MLOps & Workflow
    { Icon: SiMlflow, color: 'text-blue-400', x: 70, y: 20 },
    { Icon: SiApacheairflow, color: 'text-teal-400', x: 30, y: 85 },
    { Icon: SiApachespark, color: 'text-orange-500', x: 65, y: 75 },
    { Icon: SiDask, color: 'text-pink-400', x: 80, y: 30 },
    { Icon: SiRay, color: 'text-blue-500', x: 40, y: 70 },
    { Icon: Workflow, color: 'text-indigo-400', x: 55, y: 40 },
    
    // Cloud & Infrastructure
    { Icon: SiAmazon, color: 'text-orange-400', x: 12, y: 90 },
    { Icon: SiGooglecloud, color: 'text-blue-500', x: 90, y: 15 },
    { Icon: Cloud, color: 'text-cyan-300', x: 35, y: 12 },
    { Icon: Server, color: 'text-gray-400', x: 82, y: 55 },
    
    // Containers & Orchestration
    { Icon: SiDocker, color: 'text-blue-500', x: 18, y: 35 },
    { Icon: SiKubernetes, color: 'text-blue-600', x: 78, y: 90 },
    { Icon: Container, color: 'text-purple-400', x: 60, y: 50 },
    { Icon: Boxes, color: 'text-blue-300', x: 42, y: 22 },
    
    // Databases
    { Icon: SiMongodb, color: 'text-green-500', x: 95, y: 70 },
    { Icon: SiPostgresql, color: 'text-blue-600', x: 8, y: 65 },
    { Icon: SiRedis, color: 'text-red-500', x: 72, y: 12 },
    { Icon: Database, color: 'text-blue-400', x: 28, y: 95 },
    
    // Monitoring & Observability
    { Icon: SiGrafana, color: 'text-orange-500', x: 52, y: 78 },
    { Icon: SiPrometheus, color: 'text-orange-600', x: 88, y: 40 },
    { Icon: Activity, color: 'text-green-400', x: 15, y: 20 },
    { Icon: BarChart, color: 'text-purple-400', x: 68, y: 85 },
    { Icon: LineChart, color: 'text-cyan-400', x: 32, y: 60 },
    { Icon: TrendingUp, color: 'text-green-500', x: 92, y: 92 },
    
    // DevOps & CI/CD
    { Icon: SiGithub, color: 'text-gray-400', x: 58, y: 18 },
    { Icon: SiGitlab, color: 'text-orange-600', x: 22, y: 48 },
    { Icon: SiJenkins, color: 'text-red-600', x: 75, y: 55 },
    { Icon: SiCircleci, color: 'text-green-500', x: 45, y: 35 },
    { Icon: GitBranch, color: 'text-purple-400', x: 85, y: 22 },
    
    // API & Backend
    { Icon: SiFastapi, color: 'text-teal-500', x: 38, y: 82 },
    { Icon: SiFlask, color: 'text-gray-400', x: 62, y: 68 },
    { Icon: SiGraphql, color: 'text-pink-500', x: 12, y: 78 },
    { Icon: SiApachekafka, color: 'text-gray-700', x: 95, y: 35 },
    { Icon: Network, color: 'text-blue-400', x: 48, y: 58 },
    
    // Frontend & Visualization
    { Icon: SiReact, color: 'text-cyan-400', x: 25, y: 8 },
    { Icon: SiStreamlit, color: 'text-red-500', x: 70, y: 42 },
    { Icon: SiVite, color: 'text-purple-500', x: 55, y: 92 },
    { Icon: SiTailwindcss, color: 'text-cyan-400', x: 8, y: 28 },
    { Icon: SiFramer, color: 'text-pink-400', x: 78, y: 72 },
    
    // Infrastructure as Code
    { Icon: SiTerraform, color: 'text-purple-600', x: 42, y: 92 },
    { Icon: SiAnsible, color: 'text-red-600', x: 88, y: 62 },
    { Icon: Cog, color: 'text-gray-400', x: 18, y: 62 },
    { Icon: Settings, color: 'text-blue-400', x: 65, y: 28 },
    
    // Additional Tools
    { Icon: SiNginx, color: 'text-green-600', x: 35, y: 45 },
    { Icon: SiElasticsearch, color: 'text-teal-500', x: 72, y: 95 },
    { Icon: SiPostman, color: 'text-orange-500', x: 5, y: 52 },
    { Icon: Cpu, color: 'text-cyan-400', x: 92, y: 78 },
    { Icon: Zap, color: 'text-yellow-400', x: 52, y: 25 },
    { Icon: Code, color: 'text-green-400', x: 28, y: 38 },
    { Icon: Sparkles, color: 'text-purple-300', x: 82, y: 48 },
    { Icon: Terminal, color: 'text-green-500', x: 45, y: 62 },
    { Icon: Package, color: 'text-orange-400', x: 62, y: 8 },
    { Icon: Layers, color: 'text-blue-300', x: 15, y: 88 },
    { Icon: Box, color: 'text-purple-300', x: 95, y: 25 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {icons.map(({ Icon, color, x, y }, i) => {
        const offsetX = ((mousePosition.x / window.innerWidth) - 0.5) * 30;
        const offsetY = ((mousePosition.y / window.innerHeight) - 0.5) * 30;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              x: offsetX * (i % 3 === 0 ? 1 : i % 3 === 1 ? -0.5 : 0.7),
              y: offsetY * (i % 2 === 0 ? 1 : -0.5),
              rotate: [0, 360],
            }}
            transition={{
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { type: 'spring', stiffness: 50, damping: 20 },
              rotate: {
                duration: 20 + (i % 10) * 2,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            >
              <Icon size={20 + (i % 3) * 4} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
