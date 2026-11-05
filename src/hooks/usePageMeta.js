import { useEffect } from 'react';

// Sets the page title and meta description for a case study route, restoring them on leave
export const usePageMeta = (title, description) => {
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.content;
    document.title = title;
    desc?.setAttribute('content', description);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      if (prevDesc) desc.setAttribute('content', prevDesc);
    };
  }, [title, description]);
};
