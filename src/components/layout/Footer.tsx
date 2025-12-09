import { Link } from "react-router-dom";
import { Shield, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    // { icon: <Twitter />, href: "#" },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/mbf.dreamlab?igsh=MTBhZDNwenkyeHNxYg%3D%3D&utm_source=qr",
    },
    // { icon: <Linkedin />, href: "#" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "News", path: "/news" },
  ];

  return (
    <footer className="bg-steel-gray-darker border-t border-border-color">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-champagne-gold" />
              <span className="text-xl font-bold tracking-wider">
                MBF DREAMLAB LLP
              </span>
            </Link>
            <p className="text-text-secondary max-w-xs">
              More than a media house—it’s a creative ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-widest">
              Navigate
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-electric-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-text-secondary hover:text-electric-blue transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-text-secondary mt-4">
              maabadaulatfilms@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-color text-center text-text-secondary text-sm">
          <p>
            &copy; {new Date().getFullYear()} MBF DREAMLAB LLP. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
