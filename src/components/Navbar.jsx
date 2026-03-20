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
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed w-full z-40 transition-all duration-300', isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5')}>
      <div className='container flex justify-between items-center'>
        <a href='#hero' className='text-xl font-bold flex items-center text-primary'>
          <span className='relative z-10'></span>{' '}
          <span className='text-glow text-foreground'>Ahmad(Sunnitech)</span> Portfolio
        </a>
        {/* desktop nav */}
        <div className='hidden md:flex items-center space-x-8'>
          {NavItems.map((item, key) => (
            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 mr-15'>
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='md:hidden p-2 text-foreground z-50'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};