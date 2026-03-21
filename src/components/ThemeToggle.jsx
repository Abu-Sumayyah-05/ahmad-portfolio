import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  if (!mounted) return null;

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        'fixed top-4 right-4 md:top-5 md:right-5 z-50 p-2 md:p-2.5 rounded-full transition-all duration-300',
        'bg-card border border-border hover:border-primary shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-primary/20'
      )}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className='h-4 w-4 md:h-5 md:w-5 text-amber-500' />
      ) : (
        <Moon className='h-4 w-4 md:h-5 md:w-5 text-primary' />
      )}
    </button>
  );
};