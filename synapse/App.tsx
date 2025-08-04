
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import PsychologistsPage from './pages/PsychologistsPage';
import AccountPage from './pages/AccountPage';
import SettingsDetailPage from './pages/SettingsDetailPage';
import AcademyPage from './pages/AcademyPage';
import PersonalInfoPage from './pages/account/PersonalInfoPage';
import MyProgressPage from './pages/account/MyProgressPage';
import NotificationsPage from './pages/account/NotificationsPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/detail/:type/:id" element={<DetailPage />} />
        <Route path="/account/personal-info" element={<PersonalInfoPage />} />
        <Route path="/account/progress" element={<MyProgressPage />} />
        <Route path="/account/notifications" element={<NotificationsPage />} />
        <Route path="/account/integrations" element={<SettingsDetailPage title="Integrações" />} />
        <Route path="/account/subscription" element={<SettingsDetailPage title="Gerenciar Assinatura" />} />
        <Route path="/account/privacy" element={<SettingsDetailPage title="Privacidade e Dados" />} />
        <Route path="/account/support" element={<SettingsDetailPage title="Ajuda e Suporte" />} />
        <Route path="/account/invite" element={<SettingsDetailPage title="Convidar Amigos" />} />
        <Route path="/account/about" element={<SettingsDetailPage title="Sobre o Synapse" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Layout: React.FC = () => {
    const location = useLocation();
    const showNav = !['/login', '/create-account'].includes(location.pathname);

    return (
        <div className="relative mx-auto h-screen max-w-md shadow-2xl flex flex-col">
            <main className="flex-grow overflow-y-auto relative">
              <AnimatedRoutes />
            </main>
            {showNav && <BottomNav />}
        </div>
    );
};


function App(): React.ReactNode {
  return (
    <div className="min-h-screen font-sans bg-slate-100">
        <HashRouter>
            <Layout />
        </HashRouter>
    </div>
  );
}

export default App;