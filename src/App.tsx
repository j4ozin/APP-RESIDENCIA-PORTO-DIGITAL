import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import BriefingCasadoZero from './pages/BriefingCasadoZero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/briefing/casadozero" element={<BriefingCasadoZero />} />
      </Routes>
    </Router>
  );
}

export default App;
