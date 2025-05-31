import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import BriefingCasadoZero from './pages/Briefing/BriefingCasadoZero';
import { Route, Routes } from 'react-router-dom';
import EditProfissional from './pages/PerfilPage/EditProfissional';
import EditCliente from './pages/PerfilPage/EditCliente';
import ViewProfissional from './pages/PerfilPage/ViewProfissional';
import ViewCliente from './pages/PerfilPage/ViewCliente';
import Briefings from './pages/Briefing/ListaBriefings';
import ProjectsPage from './pages/ProjectsPage';
import Layout from './Layout'; // novo import

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route
        path="/briefing/casadozero"
        element={
          <Layout>
            <BriefingCasadoZero />
          </Layout>
        }
      />
      <Route
        path="/perfil/cliente/editar"
        element={
          <Layout>
            <EditCliente />
          </Layout>
        }
      />
      <Route
        path="/perfil/cliente/ver"
        element={
          <Layout>
            <ViewCliente />
          </Layout>
        }
      />
      <Route
        path="/perfil/profissional/editar"
        element={
          <Layout>
            <EditProfissional />
          </Layout>
        }
      />
      <Route
        path="/perfil/profissional/ver"
        element={
          <Layout>
            <ViewProfissional />
          </Layout>
        }
      />
      <Route
        path="/briefing"
        element={
          <Layout>
            <Briefings />
          </Layout>
        }
      />
      <Route
        path="/projetos"
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />
    </Routes>
  );
}
