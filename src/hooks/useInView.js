import { useEffect, useRef, useState } from 'react';

// Returns [ref, inView]. inView flips to true the first time the element
// enters the viewport and stays true (animations only play once).
export const useInView = ({ threshold = 0.2, rootMargin = '0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};
