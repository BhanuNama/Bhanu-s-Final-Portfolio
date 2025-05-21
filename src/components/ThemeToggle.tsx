import { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return null;
};

export default ThemeToggle;
