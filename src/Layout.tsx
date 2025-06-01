import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from './components/Header';
import ProfileHeader from './components/Profile/ProfileHeader';
import { imagens } from './assets/imagens';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  const tipoUsuario = location.state?.tipoUsuario ?? "profissional";

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [location.pathname]); // atualiza ao trocar de rota

  
  

  const renderHeader = () => {
    if (location.pathname.startsWith('/perfil')) {
      return <ProfileHeader profilePic={''} tipoUsuario={'cliente'} />;
    } else if (location.pathname.startsWith('/briefing')) {
      return <ProfileHeader profilePic={''} tipoUsuario={'cliente'} />;
    } else if (location.pathname.startsWith('/projetos')) {
      return <ProfileHeader profilePic={tipoUsuario === "cliente" ? imagens.cliente : imagens.arquiteto} tipoUsuario={tipoUsuario} />;
    }
    return <Header activeSection="" />;
  };

  return (
    <>
      <div ref={headerRef}>
        {renderHeader()}
      </div>
      <div style={{ paddingTop: headerHeight }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
