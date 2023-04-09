import { useState, useEffect } from 'react';

function useScroll() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleScroll() {
      setHeight(window.pageYOffset);
      setWidth(window.innerWidth);
    }

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { height, width };
}

export default useScroll;
