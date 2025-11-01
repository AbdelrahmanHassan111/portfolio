import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function LinkedInPosts() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Sample LinkedIn posts - in a real app, these would come from LinkedIn API
  const posts = [
    {
      id: 1,
      content: 'Excited to share that our paper on Alzheimer\'s Disease Detection using ensemble methods achieved 95.85% accuracy! Published at IEEE IMCOM 2025. Grateful for the opportunity to contribute to medical AI research. 🧠🔬',
      likes: 245,
      comments: 32,
      shares: 18,
      date: 'January 2025',
      image: null,
    },
    {
      id: 2,
      content: 'Just completed the Generative AI with Large Language Models course by DeepLearning.AI and AWS! Learned about fine-tuning LLMs, RLHF, and prompt engineering. The future of AI is incredibly exciting! 🚀',
      likes: 189,
      comments: 24,
      shares: 12,
      date: 'July 2024',
      image: null,
    },
    {
      id: 3,
      content: 'Proud to announce CLINEXA - an AI-powered medical diagnosis platform serving 1,000+ medical professionals with 94% clinical accuracy. Built with XGBoost, ResNet50, and deployed on AWS. Healthcare + AI = Transformative Impact! 💡',
      likes: 312,
      comments: 45,
      shares: 28,
      date: 'June 2024',
      image: null,
    },
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
                <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all">
                  {/* Post Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Abdelrahman Hassan</h4>
                      <p className="text-sm text-foreground/60">{post.date}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {post.content}
                  </p>

                  {/* Post Stats */}
                  <div className="flex items-center gap-6 text-sm text-foreground/60 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <ThumbsUp size={16} className="text-blue-400" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} className="text-green-400" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Share2 size={16} className="text-purple-400" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
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
