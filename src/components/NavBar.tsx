import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-white/90 dark:bg-navy/90 backdrop-blur shadow-md'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-teal font-mono text-xl font-bold"
          aria-label="Logo"
        >
          BN
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in opacity-0">
                <a href={link.href} className="nav-link font-mono">
                  <span className="text-teal">{`0${index + 1}.`}</span> {link.label}
                </a>
              </li>
            ))}
            <li style={{ animationDelay: '500ms' }} className="animate-fade-in opacity-0">
              <a href="https://drive.google.com/file/d/1PVTjyllUqs9ZeVe3hd0MucjCBYA6lnPM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy dark:text-light-slate hover:text-teal focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed top-0 right-0 h-screen w-[70%] bg-white/95 dark:bg-light-navy/90 flex flex-col justify-center items-center transition-transform duration-300 md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <button
            className="absolute top-6 right-6 text-navy dark:text-light-slate hover:text-teal focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav>
            <ul className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link font-mono text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-teal">{`0${index + 1}.`}</span> {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-8">
                <a
                  href="https://drive.google.com/file/d/1PVTjyllUqs9ZeVe3hd0MucjCBYA6lnPM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Background overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 dark:bg-navy/80 backdrop-blur-sm md:hidden z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
