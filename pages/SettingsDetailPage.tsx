
import React from 'react';
import { Link } from 'react-router-dom';

interface SettingsDetailPageProps {
  title: string;
}

const SettingsDetailPage: React.FC<SettingsDetailPageProps> = ({ title }) => {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      <header className="flex items-center p-4 border-b border-slate-200">
        <Link to="/account" className="p-2 rounded-full hover:bg-slate-200 transition-colors" aria-label="Go back to account page">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-slate-800 mx-auto pr-8">{title}</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
          <p className="text-slate-500 mt-2">This page is under construction. Check back soon!</p>
        </div>
      </main>
    </div>
  );
};

export default SettingsDetailPage;
