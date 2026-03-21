import { useState, useEffect, useCallback, useMemo } from 'react';

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  const generateStars = useCallback(() => {
    // Reduce stars on mobile for performance
    const isMobile = window.innerWidth < 768;
    const density = isMobile ? 15000 : 10000;
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / density);
    
    const newStars = [];
    for (let i = 0; i < Math.min(numberOfStars, isMobile ? 30 : 60); i++) {
      newStars.push({
        id: i,
        size: Math.random() * (isMobile ? 2 : 3) + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        animationDuration: Math.random() * 4 + 3,
      });
    }
    setStars(newStars);
  }, []);

  useEffect(() => {
    generateStars();
    const handleResize = () => {
      // Debounce resize
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(generateStars, 200);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateStars]);

  // Memoize to prevent re-renders
  const starElements = useMemo(() => 
    stars.map((star) => (
      <div
        key={star.id}
        className='star animate-pulse-subtle'
        style={{
          width: star.size + 'px',
          height: star.size + 'px',
          left: star.x + '%',
          top: star.y + '%',
          opacity: star.opacity,
          animationDuration: star.animationDuration + 's',
        }}
      />
    )),
    [stars]
  );

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {starElements}
    </div>
  );
};