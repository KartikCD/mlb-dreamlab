import { useParams, Link } from 'react-router-dom';
import { projectsData, ContentBlock } from '../data/projectData';
import { ArrowLeft, Calendar, Film, User, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const renderContentBlock = (block: ContentBlock, index: number) => {
  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
  };

  return (
    <motion.div
      key={index}
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {(() => {
        switch (block.type) {
          case 'paragraph':
            return <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">{block.text}</p>;
          case 'image':
            return (
              <figure className="my-10">
                <img src={block.url} alt={block.alt} className="w-full rounded-lg shadow-lg" />
                {block.caption && <figcaption className="text-center text-sm text-text-secondary mt-3 italic">{block.caption}</figcaption>}
              </figure>
            );
          case 'video':
            return (
              <div className="my-10 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <video
                  controls
                  loop
                  muted
                  playsInline
                  poster={block.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={block.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          default:
            return null;
        }
      })()}
    </motion.div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-glow mb-4">404</h1>
        <p className="text-2xl text-text-secondary mb-8">Project not found.</p>
        <Link to="/projects" className="text-champagne-gold hover:underline flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <div className="relative h-[60vh] md:h-[80vh]">
        <img src={project.featuredImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-16 md:pb-24 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-champagne-gold uppercase tracking-widest">{project.category}</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-glow mt-2">{project.title}</h1>
                </motion.div>
            </div>
        </div>
      </div>
      
      <div className="relative pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-steel-gray-darker p-8 md:p-10 rounded-lg shadow-2xl card-glow-subtle -mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center">
                    <User className="w-7 h-7 mb-2 text-champagne-gold"/>
                    <span className="text-sm uppercase text-text-secondary tracking-wider">Client</span>
                    <span className="font-bold text-lg">{project.client}</span>
                </div>
                <div className="flex flex-col items-center">
                    <Calendar className="w-7 h-7 mb-2 text-champagne-gold"/>
                    <span className="text-sm uppercase text-text-secondary tracking-wider">Year</span>
                    <span className="font-bold text-lg">{new Date(project.date).getFullYear()}</span>
                </div>
                <div className="flex flex-col items-center col-span-2 md:col-span-2">
                    <Wrench className="w-7 h-7 mb-2 text-champagne-gold"/>
                    <span className="text-sm uppercase text-text-secondary tracking-wider">Services</span>
                    <span className="font-bold text-lg text-center">{project.services.join(', ')}</span>
                </div>
            </div>
          </motion.div>

          <article className="mt-16 max-w-4xl mx-auto">
            {project.content.map((block, index) => renderContentBlock(block, index))}
          </article>
          
          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-flex items-center text-champagne-gold hover:text-white transition-colors duration-300 text-lg">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
