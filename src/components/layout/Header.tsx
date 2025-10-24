import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'News', path: '/news' },
  { name: 'Behind the Scenes', path: '/behind-the-scenes' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-champagne-gold group-hover:text-electric-blue transition-colors" />
            <span className="text-xl font-bold tracking-wider text-text-primary group-hover:text-electric-blue transition-colors">
              DEAMLAB
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-semibold uppercase tracking-widest transition-colors hover:text-electric-blue',
                    isActive ? 'text-electric-blue' : 'text-text-secondary'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden md:inline-block px-6 py-2 text-sm font-bold text-white bg-electric-blue rounded-full transition-transform hover:scale-105 btn-glow"
          >
            Let's Talk
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 md:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col h-full">
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2" onClick={toggleMobileMenu}>
                  <Shield className="w-8 h-8 text-champagne-gold" />
                  <span className="text-xl font-bold tracking-wider">DEAMLAB</span>
                </Link>
                <button onClick={toggleMobileMenu} className="text-white">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow gap-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      cn(
                        'text-2xl font-semibold uppercase tracking-widest transition-colors hover:text-electric-blue',
                        isActive ? 'text-electric-blue' : 'text-text-primary'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className="mt-8 px-8 py-4 text-lg font-bold text-white bg-electric-blue rounded-full transition-transform hover:scale-105 btn-glow"
                >
                  Let's Talk
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
