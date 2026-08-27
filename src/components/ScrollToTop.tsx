import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL contains a hash, scroll to that section
    if (hash) {
      const id = hash.substring(1);

      // Wait for the new page/section to render
      const timer = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // Otherwise, scroll to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;