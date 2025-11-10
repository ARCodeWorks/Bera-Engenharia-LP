import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 72; // Fallback height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#destaques', label: 'Destaques' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];
  
  const isTransparent = !isScrolled && !isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-white/90 shadow-md backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={handleNavClick} 
          className={`text-2xl font-bold transition hover:text-amber-500 ${
            isTransparent ? 'text-white' : 'text-slate-800'
          }`}
        >
          BERÁ
          <span className="text-amber-500">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`font-medium hover:text-amber-500 transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-slate-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`focus:outline-none ${isTransparent ? 'text-white' : 'text-slate-800'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 font-medium hover:text-amber-500 transition-colors duration-300"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;