'use client';

import { useEffect, useState } from 'react';
import BrandLogo from '../ui/brand-logo';
import styles from './navbar.module.css';
import ResponsiveNavBar from './responsive-navbar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (path.includes('/build-with-us/request')) return;
  return (
    <header
      className={`fixed py-3 px-3 top-0 z-50 grid min-h-20 w-full place-items-center ${
        isScrolled ? 'bg-main/50 backdrop-blur-xs' : 'bg-transparent'
      }`}
    >
      <section
        className={`${styles.navContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo />

        <ResponsiveNavBar styles={styles} isScrolled={isScrolled} />
      </section>
    </header>
  );
};

export default Navbar;
