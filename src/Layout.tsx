import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        console.log('Header height:', height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <div ref={headerRef}>
        <Header activeSection="" />
      </div>
      <div style={{ paddingTop: headerHeight }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
