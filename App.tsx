
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import PsychologistsPage from './pages/PsychologistsPage';
import AccountPage from './pages/AccountPage';
import SettingsDetailPage from './pages/SettingsDetailPage';
import AcademyPage from './pages/AcademyPage';

function App(): React.ReactNode {
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <div className="relative mx-auto h-screen max-w-md bg-slate-50 shadow-2xl flex flex-col">
        <HashRouter>
          <main className="flex-grow flex flex-col overflow-y-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/psychologists" element={<PsychologistsPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/account/personal-info" element={<SettingsDetailPage title="Personal Information" />} />
              <Route path="/account/progress" element={<SettingsDetailPage title="My Progress" />} />
              <Route path="/account/notifications" element={<SettingsDetailPage title="Notifications" />} />
              <Route path="/account/integrations" element={<SettingsDetailPage title="Integrations" />} />
              <Route path="/account/subscription" element={<SettingsDetailPage title="Manage Subscription" />} />
              <Route path="/account/privacy" element={<SettingsDetailPage title="Privacy & Data" />} />
              <Route path="/account/support" element={<SettingsDetailPage title="Help & Support" />} />
              <Route path="/account/invite" element={<SettingsDetailPage title="Invite Friends" />} />
              <Route path="/account/about" element={<SettingsDetailPage title="About Synapse" />} />
            </Routes>
          </main>
          <BottomNav />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;