
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
import NotificationsPage from './pages/account/NotificationsPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { UserProvider } from './context/UserContext';
import SettingsPage from './pages/SettingsPage';
import ProfessionalDetailsPage from './pages/ProfessionalDetailsPage';
import WorkoutsPage from './pages/WorkoutsPage';
import GroupClassesPage from './pages/GroupClassesPage';
import GroupClassDetailPage from './pages/GroupClassDetailPage';
import RecipesPage from './pages/RecipesPage';
import ArticlesPage from './pages/ArticlesPage';
import CuriositiesPage from './pages/CuriositiesPage';
import PodcastCategoryPage from './pages/PodcastCategoryPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/curiosities" element={<CuriositiesPage />} />
        <Route path="/group-classes" element={<GroupClassesPage />} />
        <Route path="/group-class/:id" element={<GroupClassDetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/detail/:type/:id" element={<DetailPage />} />
        <Route path="/podcasts/:categoryId" element={<PodcastCategoryPage />} />
        <Route path="/account/personal-info" element={<PersonalInfoPage />} />
        <Route path="/account/notifications" element={<NotificationsPage />} />
        <Route path="/account/integrations" element={<SettingsDetailPage title="Integrações" />} />
        <Route path="/account/privacy" element={<SettingsDetailPage title="Privacidade e Dados" />} />
        <Route path="/account/support" element={<SettingsDetailPage title="Ajuda e Suporte" />} />
        <Route path="/account/invite" element={<SettingsDetailPage title="Convidar Amigos" />} />
        <Route path="/account/about" element={<SettingsDetailPage title="Sobre o Synapse" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/professional-details/:id" element={<ProfessionalDetailsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Layout: React.FC = () => {
    const location = useLocation();
    const showNav = !['/login', '/create-account'].includes(location.pathname);

    return (
        <div className="relative mx-auto h-screen max-w-md flex flex-col bg-white border-x border-slate-200">
            <main className="flex-grow overflow-y-auto relative no-scrollbar">
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
            <UserProvider>
                <Layout />
            </UserProvider>
        </HashRouter>
    </div>
  );
}

export default App;
