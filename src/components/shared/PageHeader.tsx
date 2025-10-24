import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="pt-32 pb-16 bg-steel-gray-darker text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-glow">{title}</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
      </motion.div>
    </div>
  );
};

export default PageHeader;
