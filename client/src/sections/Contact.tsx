import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import MessagePortal from '@/components/MessagePortal';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'abdelrahman.h004@gmail.com', href: 'mailto:abdelrahman.h004@gmail.com' },
    { Icon: Phone, label: 'Phone', value: '+20 1117097127', href: 'tel:+201117097127' },
    { Icon: MapPin, label: 'Location', value: 'Cairo, Egypt', href: null },
  ];

  const socialLinks = [
    { Icon: Github, label: 'GitHub', href: 'https://github.com/AbdelrahmanHassan111', color: 'hover:text-purple-400' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abdelrahman-hassan', color: 'hover:text-blue-400' },
    { Icon: Mail, label: 'Email', href: 'mailto:abdelrahman.h004@gmail.com', color: 'hover:text-cyan-400' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <SectionTitle subtitle="Let's work together on your next project">
          Get In Touch
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Contact Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-12">
            <p className="text-xl text-center text-foreground/80 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map(({ Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {href ? (
                    <a href={href} className="block p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-center group">
                      <Icon className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                      <p className="text-sm text-foreground/60 mb-1">{label}</p>
                      <p className="text-foreground/80 font-medium">{value}</p>
                    </a>
                  ) : (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <Icon className="mx-auto mb-3 text-purple-400" size={32} />
                      <p className="text-sm text-foreground/60 mb-1">{label}</p>
                      <p className="text-foreground/80 font-medium">{value}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              {socialLinks.map(({ Icon, label, href, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all ${color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  aria-label={label}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Message Portal */}
          <MessagePortal />
        </motion.div>
      </div>
    </section>
  );
}
