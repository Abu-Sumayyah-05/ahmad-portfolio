import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={cn('fixed w-full z-40 transition-all duration-300', isScrolled ? 'py-3 bg-background/90 backdrop-blur-md shadow-sm' : 'py-4 md:py-5')}>
      <div className='container flex justify-between items-center'>
        <a href='#hero' className='text-lg md:text-xl font-bold flex items-center gap-2' onClick={() => setIsMenuOpen(false)}>
          <span className="text-primary">Ahmad</span>
          <span className='text-foreground hidden sm:inline'>(Sunnitech)</span>
        </a>
        
        {/* Desktop nav */}
        <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
          {NavItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className='text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 text-foreground hover:text-primary transition-colors'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background/98 backdrop-blur-lg z-30 md:hidden flex flex-col items-center justify-start pt-12 space-y-6 animate-fade-in">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};