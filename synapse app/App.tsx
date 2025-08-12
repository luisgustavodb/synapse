
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
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
import { ThemeProvider } from './context/ThemeContext';
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
  const location = ReactRouterDOM.useLocation();
  return (
    <AnimatePresence mode="wait">
      <ReactRouterDOM.Routes location={location} key={location.pathname}>
        <ReactRouterDOM.Route path="/" element={<HomePage />} />
        <ReactRouterDOM.Route path="/academy" element={<AcademyPage />} />
        <ReactRouterDOM.Route path="/workouts" element={<WorkoutsPage />} />
        <ReactRouterDOM.Route path="/recipes" element={<RecipesPage />} />
        <ReactRouterDOM.Route path="/articles" element={<ArticlesPage />} />
        <ReactRouterDOM.Route path="/curiosities" element={<CuriositiesPage />} />
        <ReactRouterDOM.Route path="/group-classes" element={<GroupClassesPage />} />
        <ReactRouterDOM.Route path="/group-class/:id" element={<GroupClassDetailPage />} />
        <ReactRouterDOM.Route path="/chat" element={<ChatPage />} />
        <ReactRouterDOM.Route path="/psychologists" element={<PsychologistsPage />} />
        <ReactRouterDOM.Route path="/account" element={<AccountPage />} />
        <ReactRouterDOM.Route path="/settings" element={<SettingsPage />} />
        <ReactRouterDOM.Route path="/detail/:type/:id" element={<DetailPage />} />
        <ReactRouterDOM.Route path="/podcasts/:categoryId" element={<PodcastCategoryPage />} />
        <ReactRouterDOM.Route path="/account/personal-info" element={<PersonalInfoPage />} />
        <ReactRouterDOM.Route path="/account/notifications" element={<NotificationsPage />} />
        <ReactRouterDOM.Route path="/account/integrations" element={<SettingsDetailPage title="Integrações" />} />
        <ReactRouterDOM.Route path="/account/privacy" element={<SettingsDetailPage title="Privacidade e Dados" />} />
        <ReactRouterDOM.Route path="/account/support" element={<SettingsDetailPage title="Ajuda e Suporte" />} />
        <ReactRouterDOM.Route path="/account/invite" element={<SettingsDetailPage title="Convidar Amigos" />} />
        <ReactRouterDOM.Route path="/account/about" element={<SettingsDetailPage title="Sobre o Synapse" />} />
        <ReactRouterDOM.Route path="/login" element={<LoginPage />} />
        <ReactRouterDOM.Route path="/create-account" element={<CreateAccountPage />} />
        <ReactRouterDOM.Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <ReactRouterDOM.Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <ReactRouterDOM.Route path="/professional-details/:id" element={<ProfessionalDetailsPage />} />
      </ReactRouterDOM.Routes>
    </AnimatePresence>
  );
};

const Layout: React.FC = () => {
    const location = ReactRouterDOM.useLocation();
    const showNav = !['/login', '/create-account'].includes(location.pathname);

    return (
        <div className="relative mx-auto h-screen max-w-md flex flex-col bg-white dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
            <main className="flex-grow overflow-y-auto relative no-scrollbar">
              <AnimatedRoutes />
            </main>
            {showNav && <BottomNav />}
        </div>
    );
};


function App(): React.ReactNode {
  return (
    <div className="min-h-screen font-sans bg-slate-100 dark:bg-slate-950">
        <ReactRouterDOM.HashRouter>
            <ThemeProvider>
                <UserProvider>
                    <Layout />
                </UserProvider>
            </ThemeProvider>
        </ReactRouterDOM.HashRouter>
    </div>
  );
}

export default App;