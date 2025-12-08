import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://images.pexels.com/photos/3792779/pexels-photo-3792779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      >
        <source
          src="https://videos.pexels.com/video-files/854132/854132-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Animated Orbs */}
      <HeroBackgroundAnimation />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-glow"
        >
          MBF DREAMLAB
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed"
        >
          More than a media house—it’s a creative ecosystem.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asLink
            to="/projects"
            variant="primary"
            className="text-lg px-8 py-3"
          >
            Explore Our Work
          </Button>
          <Button
            asLink
            to="/contact"
            variant="secondary"
            className="text-lg px-8 py-3"
          >
            Let's Create Together
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="w-8 h-8 text-white/70 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
