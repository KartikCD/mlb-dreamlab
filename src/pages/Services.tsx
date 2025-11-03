import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';

const detailedServices = [
  {
    title: 'Film Production',
    description: 'From independent films to large-scale cinema, we are here to provide end-to-end production support—concept, scripting, filming, editing, and distribution. We don’t just make films; we craft timeless stories.',
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Concept Development & Scripting', 'Casting & Location Scouting', 'Cinematography & Direction', 'Post-Production & VFX', 'Distribution Strategy']
  },
  {
    title: 'Advertising',
    description: 'Whether it’s a 30-second ad film, digital campaign, or brand story, we design content that captures attention and drives impact. Creative, bold, and unforgettable.',
    imageUrl: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['TV Commercials', 'Digital Ad Campaigns', 'Branded Content & Films', 'Social Media Video Production', 'Creative Strategy']
  },
  {
    title: 'Government PR & Campaigns',
    description: 'Trusted by institutions, we craft communication strategies and execute campaigns that reach people, inspire change, and build trust.',
    imageUrl: 'https://images.pexels.com/photos/7848733/pexels-photo-7848733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Public Service Announcements', 'Social Awareness Campaigns', 'Documentaries & Docu-series', 'Digital & Print Media Strategy', 'Event Coverage']
  },
  {
    title: 'Events & Experiences',
    description: 'We create immersive, engaging, and memorable events—be it corporate gatherings, cultural showcases, or product launches. Every detail is curated to perfection.',
    imageUrl: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Corporate Events & Conferences', 'Product Launches', 'Cultural Festivals & Showcases', 'Live Broadcast & Streaming', 'Experiential Marketing']
  }
];

const Services = () => {
  return (
    <div className="bg-background min-h-screen text-text-primary">
      <PageHeader title="Our Services" subtitle="A comprehensive suite of production services designed to bring your vision to life with cinematic excellence." />
      
      <div className="container mx-auto px-6 py-20 md:py-32 space-y-24">
        {detailedServices.map((service, index) => (
          <motion.div
            key={service.title}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={cn('order-1', index % 2 !== 0 && 'lg:order-2')}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">{service.title}</h2>
              <p className="text-text-secondary text-lg mb-8">{service.description}</p>
              <ul className="space-y-3">
                {service.offerings.map(offering => (
                  <li key={offering} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0" />
                    <span className="text-text-primary">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn('order-2', index % 2 !== 0 && 'lg:order-1')}>
              <div className="rounded-lg overflow-hidden card-glow">
                <img src={service.imageUrl} alt={service.title} className="w-full h-96 object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-steel-gray-darker">
        <div className="container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-glow">Ready to Start Your Project?</h2>
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
