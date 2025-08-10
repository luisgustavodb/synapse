import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notifications } from '../constants';
import type { Notification } from '../types';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => {
    const isAvatarUrl = notification.user.avatar.startsWith('http');
    
    const followButton = notification.type === 'follow' && !notification.isRead && (
      <button className="text-sm font-semibold bg-blue-500 text-white px-4 py-1 rounded-lg ml-auto hover:bg-blue-600 transition-colors flex-shrink-0">
        Seguir
      </button>
    );

    return (
        <div className="flex items-center p-3 space-x-3 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xl overflow-hidden ${!isAvatarUrl ? 'bg-slate-200' : ''}`}>
                {isAvatarUrl ? (
                    <img src={notification.user.avatar} alt={notification.user.name} className="w-full h-full object-cover" />
                ) : (
                    notification.user.avatar
                )}
            </div>
            <div className="flex-grow text-sm text-slate-700">
                <p>
                    <span className="font-bold text-slate-800">{notification.user.name}</span>{' '}
                    {notification.content}
                     <span className="text-slate-500 ml-1">{notification.timestamp}</span>
                </p>
            </div>
            { followButton }
            { notification.postThumbnail && !followButton && (
                <img src={notification.postThumbnail} alt="Miniatura da postagem" className="w-11 h-11 rounded-md object-cover flex-shrink-0 ml-auto" />
            )}
            {!notification.isRead && (
                 <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 ml-3 self-center"></div>
            )}
        </div>
    );
};


const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose }) => {
  const backdropMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };

  const panelMotionProps = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 30 } as const,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            {...backdropMotionProps}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-40"
            aria-hidden="true"
          />
          {/* Positioning container to match the app's max-width and centering */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-screen z-50 pointer-events-none">
            <motion.div
                {...panelMotionProps}
                className="absolute top-20 right-4 w-[24rem] max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden pointer-events-auto"
            >
                <div className="p-4 border-b border-slate-200">
                    <h2 className="font-bold text-lg text-slate-800">Notificações</h2>
                </div>
                <div className="py-2 max-h-96 overflow-y-auto no-scrollbar">
                {notifications.map(n => <NotificationItem key={n.id} notification={n} />)}
                </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationsPanel;