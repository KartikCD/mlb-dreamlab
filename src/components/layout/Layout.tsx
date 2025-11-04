import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  // This effect is the single source of truth for page backgrounds.
  // It directly manipulates the <body> tag's class list based on the current route.
  useEffect(() => {
    if (isAboutPage) {
      document.body.classList.add('about-page-background');
      document.body.classList.remove('default-background');
    } else {
      document.body.classList.add('default-background');
      document.body.classList.remove('about-page-background');
    }

    // This cleanup is not strictly necessary for SPA navigation but is good practice.
    // It ensures the default background is restored if the component were ever to unmount entirely.
    return () => {
      document.body.classList.add('default-background');
      document.body.classList.remove('about-page-background');
    };
  }, [isAboutPage]); // This effect re-runs only when the user navigates to or from the About page.

  return (
    // This container is now transparent, allowing the <body> background to show through.
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
