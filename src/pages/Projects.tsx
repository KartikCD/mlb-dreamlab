import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';

const projects = [
  {
    title: 'Project Cygnus',
    category: 'Sci-Fi Short Film',
    imageUrl: 'https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A lone astronaut discovers a mysterious signal from a distant nebula, forcing her to confront the vastness of space and her own solitude.'
  },
  {
    title: 'Echoes of Silence',
    category: 'Documentary',
    imageUrl: 'https://images.pexels.com/photos/7990933/pexels-photo-7990933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'This documentary explores the abandoned landscapes of Chernobyl, capturing the haunting beauty and resilient nature that has reclaimed the silent city.'
  },
  {
    title: 'Crimson Tide',
    category: 'Music Video',
    imageUrl: 'https://images.pexels.com/photos/1444420/pexels-photo-1444420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A visually stunning music video that blends surreal imagery with powerful choreography to tell a story of passion and heartbreak.'
  },
  {
    title: 'Metropolis Dreams',
    category: 'Commercial',
    imageUrl: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A high-energy commercial showcasing the vibrant life of a futuristic city, blending cutting-edge VFX with a compelling human story.'
  },
  {
    title: 'The Wanderer',
    category: 'Narrative Short',
    imageUrl: 'https://images.pexels.com/photos/1528640/pexels-photo-1528640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A quiet, character-driven piece about a traveler who finds meaning in the small connections made on a long journey through nature.'
  },
  {
    title: 'Neon Drive',
    category: 'Music Video',
    imageUrl: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Synthwave visuals meet a retro-futuristic aesthetic in this music video that takes you on a thrilling night drive through a neon-soaked city.'
  }
];

const Projects = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Our Work" subtitle="A collection of our cinematic and storytelling projects." />
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-steel-gray rounded-lg overflow-hidden card-glow flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden group">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm uppercase tracking-widest text-champagne-gold">{project.category}</span>
                <h3 className="text-2xl font-bold mt-1 mb-3">{project.title}</h3>
                <p className="text-text-secondary text-base mb-6 flex-grow">{project.description}</p>
                <div className="mt-auto">
                    <Button asLink to="#" variant="secondary" className="w-full">
                        View Project <ArrowRight className="inline ml-2 w-4 h-4" />
                    </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
