import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Film } from "lucide-react";

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium tracking-wide transition-colors duration-300 hover:text-champagne-gold ${
      isActive ? "text-champagne-gold" : "text-text-primary"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border-color"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-text-primary z-50"
          >
            <Film className="w-8 h-8 text-champagne-gold" />
            <span>MBF DREAMLAB LLP</span>
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
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col items-center justify-center"
          >
            <motion.nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={mobileLinkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-semibold text-text-primary hover:text-champagne-gold transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
