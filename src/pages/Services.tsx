import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Package, Sparkles, ShieldCheck, Infinity, ArrowDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';

const servicesData = [
  {
    title: 'Film Production',
    description: 'From independent films to large-scale cinematic ventures, we specialize in end-to-end production support—concept development, scriptwriting, pre-production, filming, editing, and distribution. Our approach goes beyond filmmaking—we focus on crafting timeless stories that resonate emotionally, culturally, and visually.',
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Concept Development & Scripting', 'Casting & Location Scouting', 'Cinematography & Direction', 'Post-Production & VFX', 'Distribution Strategy']
  },
  {
    title: 'Advertising',
    description: 'In a world overflowing with content, we create campaigns that cut through the noise. From 30-second commercials to integrated brand stories and digital-first campaigns, our ads are bold, creative, and unforgettable. We don’t just sell products—we tell stories that build brands.',
    imageUrl: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['TV Commercials', 'Digital Ad Campaigns', 'Branded Content & Films', 'Social Media Video Production', 'Creative Strategy']
  },
  {
    title: 'Government PR & Campaigns',
    description: 'We are trusted partners for institutions, government bodies, and public initiatives. With a focus on clarity, authenticity, and reach, we design communication strategies and campaigns that inspire trust, drive participation, and create real change.',
    imageUrl: 'https://images.pexels.com/photos/7848733/pexels-photo-7848733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Public Service Announcements', 'Social Awareness Campaigns', 'Documentaries & Docu-series', 'Digital & Print Media Strategy', 'Event Coverage']
  },
  {
    title: 'Events & Experiences',
    description: 'We design immersive experiences that engage audiences and leave a mark. From high-profile corporate gatherings and cultural showcases to unforgettable product launches, every event is meticulously curated—combining creativity, logistics, and flawless execution.',
    imageUrl: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Corporate Events & Conferences', 'Product Launches', 'Cultural Festivals & Showcases', 'Live Broadcast & Streaming', 'Experiential Marketing']
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

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], ['30px', '0px', '0px', '-30px']);

  return (
    <section ref={ref} className="h-screen sticky top-0 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: imageY }}
          className="w-full h-full"
        >
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>
      </div>
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className={cn(index % 2 === 0 ? 'md:order-1' : 'md:order-2')}>
          {/* This div is intentionally left empty to create the split-screen effect */}
        </div>
        <div className={cn('text-white', index % 2 === 0 ? 'md:order-2' : 'md:order-1')}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow font-sans">{service.title}</h2>
          <p className="text-text-secondary text-lg mb-8">{service.description}</p>
          <ul className="space-y-4">
            {service.offerings.map(offering => (
              <li key={offering} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-electric-blue flex-shrink-0" />
                <span className="text-text-primary text-lg">{offering}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-glow font-sans"
        >
          Our Expertise
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl text-text-secondary max-w-2xl mx-auto"
        >
          A comprehensive suite of production services designed to bring your vision to life with cinematic excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12"
        >
          <ArrowDown className="w-8 h-8 animate-bounce text-text-secondary" />
        </motion.div>
      </div>

      {/* Services Sections */}
      <div className="relative" style={{ height: `${servicesData.length * 100}vh` }}>
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-steel-gray-darker py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-7xl font-bold text-center text-glow font-sans">Why Choose Us?</h2>
                <p className="text-lg text-text-secondary text-center mt-4 max-w-3xl mx-auto">
                    Our commitment to excellence sets us apart. We are more than a production house; we are your creative partners in crafting a legacy.
                </p>
            </motion.div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {whyChooseUsData.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="flex flex-col items-center p-6 bg-steel-gray rounded-xl border border-border-color card-glow-subtle"
                    >
                        <div className="p-4 bg-steel-gray-darker rounded-full mb-6 border border-border-color">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-text-secondary">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background relative z-10">
        <div className="container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-7xl font-bold text-glow font-sans">Ready to Start Your Project?</h2>
                <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                    Let's discuss how our expertise can elevate your next venture.
                </p>
                <div className="mt-10">
                    <Button asLink to="/contact" variant="primary" className="text-lg px-10 py-4">
                        Contact Us
                    </Button>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
