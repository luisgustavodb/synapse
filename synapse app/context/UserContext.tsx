import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { User } from '../types';
import { initialUser } from '../constants';

interface UserContextType {
    user: User;
    updateUser: (newUserData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(initialUser);

    const updateUser = (newUserData: Partial<User>) => {
        setUser(prevUser => ({ ...prevUser, ...newUserData }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
