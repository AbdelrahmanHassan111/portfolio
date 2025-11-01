import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { 
  SiPython, SiPytorch, SiTensorflow, SiReact, SiOpencv, SiDocker,
  SiGit, SiFastapi, SiStreamlit, SiScikitlearn, SiNumpy, SiPandas,
  SiJupyter, SiKeras, SiAmazon, SiGooglecloud, SiMongodb, SiPostgresql,
  SiRedis, SiNginx, SiKubernetes, SiJavascript, SiTypescript, SiNodedotjs,
  SiVite, SiTailwindcss, SiFramer, SiGithub, SiLinux, SiFlask
} from 'react-icons/si';
import { Brain, Cpu, Database, Zap, Code, Sparkles } from 'lucide-react';

export default function FlyingIcons() {
  const mousePosition = useMousePosition();

  const icons = [
    { Icon: SiPython, color: 'text-yellow-400', x: 10, y: 15 },
    { Icon: SiPytorch, color: 'text-orange-500', x: 85, y: 20 },
    { Icon: SiTensorflow, color: 'text-orange-400', x: 20, y: 70 },
    { Icon: SiReact, color: 'text-cyan-400', x: 75, y: 65 },
    { Icon: SiOpencv, color: 'text-green-500', x: 15, y: 40 },
    { Icon: SiDocker, color: 'text-blue-400', x: 90, y: 45 },
    { Icon: SiGit, color: 'text-orange-500', x: 30, y: 25 },
    { Icon: SiFastapi, color: 'text-teal-400', x: 70, y: 30 },
    { Icon: SiStreamlit, color: 'text-red-400', x: 25, y: 80 },
    { Icon: SiScikitlearn, color: 'text-orange-400', x: 80, y: 75 },
    { Icon: SiNumpy, color: 'text-blue-500', x: 45, y: 15 },
    { Icon: SiPandas, color: 'text-purple-400', x: 55, y: 85 },
    { Icon: SiJupyter, color: 'text-orange-500', x: 12, y: 55 },
    { Icon: SiKeras, color: 'text-red-500', x: 88, y: 60 },
    { Icon: SiAmazon, color: 'text-orange-400', x: 40, y: 35 },
    { Icon: SiGooglecloud, color: 'text-blue-400', x: 65, y: 50 },
    { Icon: SiMongodb, color: 'text-green-500', x: 18, y: 90 },
    { Icon: SiPostgresql, color: 'text-blue-500', x: 82, y: 85 },
    { Icon: SiRedis, color: 'text-red-500', x: 35, y: 60 },
    { Icon: SiNginx, color: 'text-green-400', x: 72, y: 18 },
    { Icon: SiKubernetes, color: 'text-blue-500', x: 50, y: 45 },
    { Icon: SiJavascript, color: 'text-yellow-400', x: 28, y: 48 },
    { Icon: SiTypescript, color: 'text-blue-500', x: 68, y: 72 },
    { Icon: SiNodedotjs, color: 'text-green-500', x: 42, y: 78 },
    { Icon: SiVite, color: 'text-purple-500', x: 92, y: 35 },
    { Icon: SiTailwindcss, color: 'text-cyan-400', x: 8, y: 28 },
    { Icon: SiFramer, color: 'text-pink-400', x: 78, y: 92 },
    { Icon: SiGithub, color: 'text-gray-400', x: 58, y: 22 },
    { Icon: SiFlask, color: 'text-gray-400', x: 22, y: 62 },
    { Icon: SiLinux, color: 'text-yellow-300', x: 62, y: 38 },
    { Icon: Brain, color: 'text-purple-400', x: 48, y: 68 },
    { Icon: Cpu, color: 'text-cyan-400', x: 38, y: 92 },
    { Icon: Database, color: 'text-blue-400', x: 95, y: 55 },
    { Icon: Zap, color: 'text-yellow-400', x: 5, y: 82 },
    { Icon: Code, color: 'text-green-400', x: 52, y: 58 },
    { Icon: Sparkles, color: 'text-pink-400', x: 85, y: 12 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, color, x, y }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} opacity-20`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
            rotate: [0, 360],
            x: mousePosition.x * (0.008 + i * 0.0003) - 50,
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        >
          <Icon size={40 + (i % 3) * 10} />
        </motion.div>
      ))}
    </div>
  );
}
