import { motion } from 'framer-motion';
import { Film, Megaphone, Landmark, CalendarDays, Package, Sparkles, ShieldCheck, Infinity } from 'lucide-react';
import Button from '../components/ui/Button';
import ImageCarousel from '../components/shared/ImageCarousel';
import FeaturedProjectsCarousel from '../components/home/FeaturedProjectsCarousel';
import Hero from '../components/home/Hero';
import NewsCarousel from '../components/home/NewsCarousel';

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

const whyChooseUsData = [
    {
        icon: <Package className="w-10 h-10 text-champagne-gold" />,
        title: 'End-to-End Expertise',
        description: 'Everything you need, from ideation to execution, under one roof.'
    },
    {
        icon: <Sparkles className="w-10 h-10 text-champagne-gold" />,
        title: 'Creative Excellence',
        description: 'Bold ideas backed by solid strategy and execution.'
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-champagne-gold" />,
        title: 'Proven Trust',
        description: 'Recognized and trusted by brands, institutions, and visionaries.'
    },
    {
        icon: <Infinity className="w-10 h-10 text-champagne-gold" />,
        title: 'Lasting Impact',
        description: 'We don’t just create for the present; we create for legacy.'
    }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Carousel Section */}
      <FeaturedProjectsCarousel />

      {/* Services Preview Section */}
      <section className="bg-background flex flex-col items-center justify-center py-20 md:py-28 text-text-primary">
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
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex flex-col items-center text-center p-8 bg-steel-gray-darker rounded-xl border border-border-color card-glow-subtle"
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
      <section className="bg-steel-gray-darker py-20 md:py-28 text-text-primary overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">An Ecosystem for Imagination</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                MBF DREAMLABS is more than a media house—it’s a creative powerhouse where imagination is the only currency. We believe great stories come from brilliant ideas and fiery ambition, not just past work.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                From script to screen and strategy to execution, we are an all-in-one partner with the expertise, talent, and resources to bring any vision to life across multiple mediums.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button asLink to="/about" variant="secondary">
                  Discover Our Story
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-glow rounded-lg"
            >
              <ImageCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-background py-20 md:py-28 text-text-primary">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-center">The Dreamlabs Difference</h2>
                <p className="text-lg text-text-secondary text-center mt-4 max-w-3xl mx-auto">
                    Our commitment to excellence sets us apart. We are more than a production house; we are your creative partners in crafting a legacy.
                </p>
            </motion.div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {whyChooseUsData.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="flex flex-col items-center text-center p-8 bg-steel-gray-darker rounded-xl border border-border-color card-glow-subtle"
                    >
                        <div className="p-4 bg-steel-gray rounded-full mb-6 border border-border-color">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-text-secondary">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="bg-steel-gray flex flex-col items-center justify-center py-20 md:py-28 text-text-primary">
        <div className="container mx-auto px-6 relative">
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
            
            <NewsCarousel />

             <div className="mt-16 text-center">
                <Button asLink to="/news" variant="primary">
                    View All News
                </Button>
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-background flex flex-col items-center justify-center text-center py-20 md:py-28 text-text-primary">
        <div className="container mx-auto px-6">
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
    </>
  );
};

export default Home;
