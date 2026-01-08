'use client'

import { useState, useEffect } from 'react';

export default function useMediaQuery(query: string){
  
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const documentChangeHandler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Listen for changes (modern browsers)
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(documentChangeHandler);
    }

    return () => {
      // Cleanup event listener
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } else {
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, [query]);

  return matches;
};