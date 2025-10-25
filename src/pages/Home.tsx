import { motion } from 'framer-motion';
import { Film, Megaphone, Landmark, CalendarDays } from 'lucide-react';
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
];

const services = [
    {
        icon: <Film className="w-10 h-10 text-champagne-gold" />,
        title: 'Film Production',
        description: 'From independent films to large-scale cinema, we provide end-to-end production support and craft timeless stories.'
    },
    {
        icon: <Megaphone className="w-10 h-10 text-champagne-gold" />,
        title: 'Advertising',
        description: 'We design content that captures attention and drives impact—creative, bold, and unforgettable ads and campaigns.'
    },
    {
        icon: <Landmark className="w-10 h-10 text-champagne-gold" />,
        title: 'Government PR & Campaigns',
        description: 'Trusted by institutions, we craft communication strategies that reach people, inspire change, and build trust.'
    },
    {
        icon: <CalendarDays className="w-10 h-10 text-champagne-gold" />,
        title: 'Events & Experiences',
        description: 'We create immersive, engaging, and memorable events, curating every detail to perfection for any occasion.'
    }
];

const news = [
    {
        title: 'DEAMLAB wins Gold at the Cinematic Arts Festival',
        category: 'Award',
        imageUrl: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Behind the Scenes of "Project Cygnus"',
        category: 'BTS',
        imageUrl: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
]

const Home = () => {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
          poster="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        >
          <source src="https://videos.pexels.com/video-files/854132/854132-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-glow">
            Crafting Visual Stories
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-text-secondary font-light">
            We are a creative production house specializing in film, video, and digital storytelling that inspires emotion.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asLink to="/projects" variant="primary">
              Explore Our Work
            </Button>
            <Button asLink to="/contact" variant="secondary">
              Let's Create Together
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 bg-steel-gray-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center">Featured Work</h2>
            <p className="text-lg text-text-secondary text-center mt-4 max-w-2xl mx-auto">
              A selection of our projects that showcase our passion for storytelling and cinematic excellence.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-steel-gray rounded-lg overflow-hidden card-glow flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden group">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm uppercase tracking-widest text-champagne-gold">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">{project.title}</h3>
                  <p className="text-text-secondary text-base flex-grow">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asLink to="/projects" variant="primary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-center">Our Expertise</h2>
                <p className="text-lg text-text-secondary text-center mt-4 max-w-2xl mx-auto">
                    We offer a complete suite of production services to bring your ideas to the screen.
                </p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <div className="p-4 bg-steel-gray rounded-full mb-6 border border-border-color">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-text-secondary max-w-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 md:py-32 bg-steel-gray-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Who We Are</h2>
              <p className="text-text-secondary text-lg">
                MBF DREAMLABS is more than a media house—it’s a creative ecosystem. Founded with the belief that great stories can come from anyone, we don’t measure you by your past work, but by the brilliance of your ideas and the fire of your imagination.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">What We Do?</h2>
              <p className="text-text-secondary text-lg">
                We are an all-in-one creative powerhouse. From script to screen, strategy to execution, idea to media, we have the expertise, talent, and resources to bring visions alive across multiple mediums.
              </p>
            </div>
          </motion.div>
          <div className="mt-16 text-center">
            <Button asLink to="/about" variant="secondary">
              More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-20 md:py-32 bg-steel-gray">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-center">Latest News</h2>
                <p className="text-lg text-text-secondary text-center mt-4 max-w-2xl mx-auto">
                    Stay updated with our latest achievements, stories, and insights from the industry.
                </p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {news.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="group bg-steel-gray-darker rounded-lg overflow-hidden card-glow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="overflow-hidden">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <span className="text-sm uppercase tracking-widest text-electric-blue">{item.category}</span>
                            <h3 className="text-xl font-bold mt-2 group-hover:text-champagne-gold transition-colors">{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-glow">Let's Create Together</h2>
                <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                    Have a story to tell? A vision to realize? We're here to help you bring it to life.
                </p>
                <div className="mt-10">
                    <Button asLink to="/contact" variant="primary" className="text-lg px-10 py-4">
                        Get in Touch
                    </Button>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
