import { useEffect, useRef, useState } from 'react';

export const useRefHeight = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }

    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { ref, height: `${height}px` };
};
