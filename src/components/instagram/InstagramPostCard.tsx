import { motion } from 'framer-motion';
import { Heart, MessageCircle, PlayCircle } from 'lucide-react';
import { InstagramPost } from '../../data/dummyInstagramPosts';

interface InstagramPostCardProps {
  post: InstagramPost;
  index: number;
}

const InstagramPostCard: React.FC<InstagramPostCardProps> = ({ post, index }) => {
  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-steel-gray rounded-lg overflow-hidden card-glow group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="aspect-square relative">
        <img src={post.mediaUrl} alt={post.caption.substring(0, 50)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {post.type === 'VIDEO' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white/80 transform transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}
      </div>
      <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
        <p className="text-white text-sm line-clamp-3">{post.caption}</p>
        <div className="flex items-center space-x-4 mt-4 text-white font-bold">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1.5" />
            <span>{post.likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1.5" />
            <span>{post.commentsCount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default InstagramPostCard;
