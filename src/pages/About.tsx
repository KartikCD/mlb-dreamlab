import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import { Eye, Target } from 'lucide-react';

const founders = [
  {
    name: 'Isabella Rossi',
    title: 'Founder & Executive Producer',
    imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With over 15 years in the industry, Isabella is the driving force behind our most ambitious projects, blending creative vision with strategic execution.'
  },
  {
    name: 'Javier Morales',
    title: 'Co-Founder & Director',
    imageUrl: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Javier is an award-winning director whose storytelling prowess turns concepts into cinematic masterpieces that resonate with audiences worldwide.'
  },
  {
    name: 'Kenji Tanaka',
    title: 'Head of Creative',
    imageUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Kenji leads our creative team, pushing the boundaries of visual narrative and ensuring every frame is a work of art.'
  }
];

const About = () => {
  return (
    <div className="bg-background min-h-screen text-text-primary">
      <PageHeader title="Our Story" subtitle="We believe in the power of imagination to shape worlds." />
      
      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">More Than a Media House</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              MBF DREAMLABS was born from a simple, powerful idea: that great stories can come from anywhere and anyone. We are an all-in-one creative powerhouse, an ecosystem where imagination is the only currency. We don't measure you by your past work, but by the brilliance of your ideas and the fire of your ambition. From script to screen, strategy to execution, we have the expertise, talent, and resources to bring any vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-32 bg-steel-gray">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="bg-steel-gray-darker p-8 rounded-lg card-glow-subtle h-full"
            >
              <div className="flex items-center mb-4">
                <Target className="w-10 h-10 text-champagne-gold mr-4 flex-shrink-0" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                To empower creators and bring groundbreaking stories to life, transforming bold ideas into unforgettable cinematic experiences that resonate globally.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-steel-gray-darker p-8 rounded-lg card-glow-subtle h-full"
            >
              <div className="flex items-center mb-4">
                <Eye className="w-10 h-10 text-champagne-gold mr-4 flex-shrink-0" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                To be a beacon of creative innovation, where imagination knows no bounds and every voice has the power to shape the future of storytelling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-20 md:py-32 bg-steel-gray-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center">Meet the Founders</h2>
            <p className="text-lg text-text-secondary text-center mt-4 max-w-2xl mx-auto">
              The visionaries who started it all, combining their passions to build a new kind of creative studio.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-steel-gray rounded-lg p-6 text-center card-glow flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img src={founder.imageUrl} alt={founder.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-border-color" />
                <h3 className="text-2xl font-bold text-champagne-gold">{founder.name}</h3>
                <p className="text-electric-blue uppercase tracking-widest text-sm mb-4">{founder.title}</p>
                <p className="text-text-secondary">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden card-glow"
            >
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="MBF Dreamlabs Team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Our Collective</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                We are a diverse team of producers, directors, writers, cinematographers, and strategists united by a single goal: to create work that matters. Our collaborative spirit is our greatest asset, allowing us to tackle any challenge and push creative boundaries.
              </p>
              <Button asLink="/contact" variant="primary">Join Our Team</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
