import { useParams, Link } from "react-router-dom";
import { newsData, ContentBlock } from "../data/newsData";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { motion } from "framer-motion";

const renderContentBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6"
        >
          {block.text}
        </p>
      );
    case "image":
      return (
        <figure key={index} className="my-8">
          <img
            src={block.url}
            alt={block.alt}
            className="w-full rounded-lg shadow-lg"
          />
          {block.caption && (
            <figcaption className="text-center text-sm text-text-secondary mt-3 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "video":
      return (
        <div key={index} className="my-8 aspect-video w-full">
          <video
            controls
            loop
            muted
            playsInline
            poster={block.poster}
            className="w-full h-full rounded-lg shadow-lg object-cover"
          >
            <source src={block.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    default:
      return null;
  }
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-glow mb-4">404</h1>
        <p className="text-2xl text-text-secondary mb-8">Article not found.</p>
        <Link
          to="/news"
          className="text-champagne-gold hover:underline flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <div className="relative h-[60vh] md:h-[70vh]">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="relative -mt-48 md:-mt-64 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-steel-gray-darker p-8 md:p-12 rounded-lg shadow-2xl card-glow-subtle">
              {/* <div className="flex items-center text-sm text-text-secondary mb-4 space-x-6">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-champagne-gold" />
                    <span>
                      <a href={article.newsLink}>View full article</a>
                    </span>
                  </div>
                </div> */}
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-glow mb-8">
                {article.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary font-light italic">
                {article.excerpt}
              </p>
            </div>
          </motion.div>

          <article className="mt-16 prose prose-invert max-w-none">
            {article.content.map((block, index) =>
              renderContentBlock(block, index)
            )}
          </article>

          {article.newsLink !== "" && (
            <div className="mt-16 text-center">
              <Link
                to={article.newsLink}
                className="inline-flex items-center text-champagne-gold hover:text-white transition-colors duration-300 text-lg"
              >
                View full article
              </Link>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              to="/news"
              className="inline-flex items-center text-champagne-gold hover:text-white transition-colors duration-300 text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
