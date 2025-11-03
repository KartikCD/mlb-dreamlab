import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Film } from 'lucide-react';

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'News', path: '/news' },
  { name: 'Behind The Scenes', path: '/behind-the-scenes' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium tracking-wide transition-colors duration-300 hover:text-champagne-gold ${isActive ? 'text-champagne-gold' : 'text-text-primary'}`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border-color z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-text-primary">
          <Film className="w-8 h-8 text-champagne-gold" />
          <span>DREAMLABS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-champagne-gold"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-0 bg-background z-50 lg:hidden"
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
           <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-text-primary" onClick={() => setIsOpen(false)}>
              <Film className="w-8 h-8 text-champagne-gold" />
              <span>DREAMLABS</span>
            </Link>
          <button onClick={() => setIsOpen(false)} className="text-text-primary">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-semibold text-text-primary hover:text-champagne-gold transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
