import { motion } from 'framer-motion';
import { FC } from 'react';

interface OrbProps {
  className: string;
  initial: object;
  animate: object;
  transition: object;
}

const Orb: FC<OrbProps> = ({ className, initial, animate, transition }) => {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-lighten ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
      style={{ filter: 'blur(120px)' }}
    />
  );
};

const HeroBackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none opacity-40">
      <Orb
        className="bg-champagne-gold w-[500px] h-[500px]"
        initial={{ x: '-20%', y: '10%' }}
        animate={{ x: '100%', y: '40%' }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      <Orb
        className="bg-electric-blue w-[400px] h-[400px]"
        initial={{ x: '80%', y: '60%' }}
        animate={{ x: '10%', y: '0%' }}
        transition={{
          duration: 35,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 5,
        }}
      />
       <Orb
        className="bg-[#9E7FFF] w-[300px] h-[300px]"
        initial={{ x: '50%', y: '80%' }}
        animate={{ x: '20%', y: '20%' }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 10,
        }}
      />
    </div>
  );
};

export default HeroBackgroundAnimation;
