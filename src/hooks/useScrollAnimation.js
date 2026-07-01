import { useEffect } from 'react';

/**
 * useScrollAnimation - Triggers CSS fade-up animations on elements
 * with the 'fade-up' class when they enter the viewport.
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
