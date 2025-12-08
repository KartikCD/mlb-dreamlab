import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import HimanshuFounder from "../images/himanshu.png";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  const founderImageAnimation = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <div className="bg-background text-text-primary">
      {/* Section 1: Hero Title */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-glow max-w-5xl mx-auto font-serif">
            An Ecosystem Where Imagination Meets Execution.
          </h1>
        </motion.div>
        <motion.div
          className="absolute bottom-10 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ArrowDown className="w-8 h-8 animate-bounce text-champagne-gold" />
        </motion.div>
      </section>

      {/* Section 2: The Story (Who We Are & What We Do) */}
      <section className="py-20 md:py-32 bg-steel-gray-darker">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Who We Are
              </h2>
              <p className="text-left">
                At MBF DREAMLABS, we are more than just a media house—we are a
                creative ecosystem where imagination meets execution. Born from
                the belief that every story matters, we don’t define creativity
                by past credentials, but by the strength of ideas and the
                courage to dream bigger.
              </p>
              <p className="text-left">
                Our team is a collective of filmmakers, storytellers,
                strategists, and innovators who thrive on transforming bold
                concepts into powerful realities. We exist to inspire, engage,
                and create work that lasts forever—whether it’s on the silver
                screen, in digital spaces, or through real-world experiences.
              </p>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                What We Do
              </h2>
              <p className="text-left">
                We are an all-in-one creative powerhouse. From the very first
                spark of an idea to its final delivery, we provide end-to-end
                solutions under one roof. Whether it’s script to screen,
                strategy to execution, or concept to campaign, idea to media we
                merge artistry with technology to bring visions alive across
                multiple mediums.
              </p>
              <p className="text-left">
                At MBF DREAMLABS, we don’t just create content—we build
                experiences that move people, spark conversations, and leave a
                lasting impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Founder Full-Width Image */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.img
          src={HimanshuFounder}
          alt="Hemanshu Rai, Founder &amp; Visionary of MBF DREAMLABS"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={founderImageAnimation}
        />
        <div className="absolute inset-0 w-full h-full bg-black/30" />
      </section>

      {/* Section 4: The Visionary (Founder Details) */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow">
              Hemanshu Rai
            </h2>
            <p className="text-electric-blue uppercase tracking-widest text-md mt-2 mb-12">
              Founder &amp; Visionary
            </p>
            <div className="space-y-6 text-text-secondary text-lg md:text-xl leading-relaxed text-left md:text-justify">
              <p>
                Hailing from the historic city of Varanasi, Hemanshu Rai’s
                journey is one of passion, innovation, and purpose. After
                completing his early education in Varanasi and Kanpur, he
                expanded his horizons overseas, pursuing a Bachelor’s in
                Business Administration (Banking &amp; Finance) in Australia.
              </p>
              <p>
                Hemanshu is not just an entrepreneur—he is a visionary builder
                of ideas. His diverse ventures span across environmental
                engineering, agricultural drone technology, and motion picture
                production, each reflecting his relentless pursuit of innovation
                with impact.
              </p>
              <ul className="list-disc list-inside space-y-4 my-8 text-left pl-4">
                <li>
                  In the water sector, he has set new benchmarks by driving
                  projects that address critical sustainability challenges.
                </li>
                <li>
                  In agriculture, he pioneered the use of cutting-edge drones
                  for precision farming, revolutionizing the way farmers engage
                  with technology.
                </li>
                <li>
                  And in cinema, he brings the same spirit of innovation,
                  channeling it into stories that entertain, inspire, and
                  endure.
                </li>
              </ul>
              <p>
                Today, Hemanshu leads MBF DREAMLABS, a media house that
                redefines storytelling. His vision is to create art that goes
                beyond entertainment—projects that blend artistry with emotional
                depth, leaving audiences moved .
              </p>
              <p>
                With every project, Hemanshu carries forward his belief that
                true impact lies at the intersection of creativity, technology,
                and human connection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
