import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './src/pages/LoginPage'
import CadastroPage from './src/pages/CadastroPage';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Página inicial (Login) */}
        <Route path="/cadastro" element={<CadastroPage />} /> {/* Página de cadastro */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;