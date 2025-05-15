import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import BriefingCasadoZero from './pages/BriefingCasadoZero';
import Perfil from './pages/PerfilPage/';
import { Route, Routes } from 'react-router-dom';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/briefing/casadozero" element={<BriefingCasadoZero />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
    )
}