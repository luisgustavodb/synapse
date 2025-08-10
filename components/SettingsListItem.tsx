
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface SettingsListItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  to: string;
}

const SettingsListItem: React.FC<SettingsListItemProps> = ({ Icon, label, to }) => {
  return (
    <Link 
        to={to}
        className="w-full flex items-center p-4 text-left transition-colors hover:bg-slate-50"
        aria-label={label}
    >
      <div className="bg-slate-100 p-2 rounded-lg">
        <Icon className="h-5 w-5 text-slate-500" />
      </div>
      <span className="flex-grow font-semibold text-slate-800 ml-4">{label}</span>
      <ChevronRightIcon className="h-5 w-5 text-slate-400" />
    </Link>
  );
};

export default SettingsListItem;