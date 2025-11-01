import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { 
  SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiOpenai, SiHuggingface, SiAmazon, SiMysql, SiDocker,
  SiKubernetes, SiPython, SiOpencv, SiJupyter, SiFastapi
} from 'react-icons/si';

interface SectionIconsProps {
  count?: number;
}

export default function SectionIcons({ count = 15 }: SectionIconsProps) {
  const mousePosition = useMousePosition();

  const icons = [
    { Icon: SiPytorch, color: '#EE4C2C', size: 40 },
    { Icon: SiTensorflow, color: '#FF6F00', size: 40 },
    { Icon: SiScikitlearn, color: '#F7931E', size: 40 },
    { Icon: SiPandas, color: '#150458', size: 40 },
    { Icon: SiNumpy, color: '#013243', size: 40 },
    { Icon: SiOpenai, color: '#412991', size: 40 },
    { Icon: SiHuggingface, color: '#FFD21E', size: 40 },
    { Icon: SiAmazon, color: '#FF9900', size: 40 },
    { Icon: SiMysql, color: '#4479A1', size: 40 },
    { Icon: SiDocker, color: '#2496ED', size: 40 },
    { Icon: SiKubernetes, color: '#326CE5', size: 40 },
    { Icon: SiPython, color: '#3776AB', size: 40 },
    { Icon: SiOpencv, color: '#5C3EE8', size: 40 },
    { Icon: SiJupyter, color: '#F37626', size: 40 },
    { Icon: SiFastapi, color: '#009688', size: 40 },
  ];

  // Generate random positions for icons
  const iconPositions = Array.from({ length: Math.min(count, icons.length) }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    icon: icons[i % icons.length],
    delay: Math.random() * 2,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {iconPositions.map((pos, index) => {
        const { Icon, color, size } = pos.icon;
        const distance = mousePosition.x && mousePosition.y
          ? Math.sqrt(
              Math.pow((pos.x - mousePosition.x / window.innerWidth * 100), 2) +
              Math.pow((pos.y - mousePosition.y / window.innerHeight * 100), 2)
            )
          : 50;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 360],
              scale: distance < 20 ? 1.5 : 1,
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
              ease: 'easeInOut',
            }}
          >
            <Icon size={size} color={color} style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))' }} />
          </motion.div>
        );
      })}
    </div>
  );
}
