import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projectData';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.slug}`} className="block bg-steel-gray rounded-lg overflow-hidden card-glow group flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img 
            src={project.featuredImage} 
            alt={project.title} 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-sm uppercase tracking-widest text-champagne-gold">{project.category}</span>
          <h3 className="text-2xl font-bold mt-1 mb-3 group-hover:text-champagne-gold transition-colors duration-300">{project.title}</h3>
          <p className="text-text-secondary text-base mb-6 flex-grow">{project.excerpt}</p>
          <div className="mt-auto text-electric-blue font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
            View Project <ArrowRight className="inline ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
