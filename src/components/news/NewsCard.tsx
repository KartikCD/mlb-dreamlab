import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NewsArticle } from "../../data/newsData";
import { Calendar, Tag } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/news/${article.slug}`}
        className="block bg-steel-gray rounded-lg overflow-hidden card-glow group flex flex-col h-full"
      >
        <div className="relative overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-champagne-gold transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-text-secondary text-base flex-grow">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
