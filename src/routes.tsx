import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import BriefingCasadoZero from './pages/BriefingCasadoZero';
import { Route, Routes } from 'react-router-dom';
import EditProfissional from './pages/PerfilPage/EditProfissional';
import EditCliente from './pages/PerfilPage/EditCliente';
import ViewProfissional from './pages/PerfilPage/ViewProfissional';
import ViewCliente from './pages/PerfilPage/ViewCliente';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/briefing/casadozero" element={<BriefingCasadoZero />} />
            <Route path="/perfil/cliente/editar" element={<EditCliente />} />
            <Route path="/perfil/profissional/editar" element={<EditProfissional />} />
            <Route path="/perfil/profissional/ver" element={<ViewProfissional />} />
            <Route path="/perfil/cliente/ver" element={<ViewCliente />} />
        </Routes>
    )
}