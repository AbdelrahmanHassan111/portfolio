import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function LinkedInPosts() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Real embedded LinkedIn posts
  const posts = [
    {
      id: 1,
      embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7370876665691930624"
      height="474" width="100%" frameborder="0" allowfullscreen="" title="LinkedIn Post"></iframe>`
    },
    {
      id: 2,
      embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7372206050957025280"
      height="669" width="100%" frameborder="0" allowfullscreen="" title="LinkedIn Post"></iframe>`
    },
    {
      id: 3,
      embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7370887034846040064"
      height="546" width="100%" frameborder="0" allowfullscreen="" title="LinkedIn Post"></iframe>`
    }
  ];

  return (
    <section id="linkedin-posts" className="py-32 relative bg-white/5" ref={ref}>
      <div className="container">
        <SectionTitle subtitle="Recent updates and achievements">
          <div className="flex items-center gap-3 justify-center">
            <Linkedin className="text-blue-500" size={40} />
            <span>LinkedIn Posts</span>
          </div>
        </SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-full p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden">
                  
                  {/* Render Embedded LinkedIn Post */}
                  <div
                    className="w-full"
                    dangerouslySetInnerHTML={{ __html: post.embed }}
                  />

                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://www.linkedin.com/in/abdelrahman-hassan-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              <Linkedin size={24} />
              <span>View All Posts on LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
