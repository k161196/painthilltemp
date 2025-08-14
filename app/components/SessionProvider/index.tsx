'use client';

import { useEffect } from 'react';
import { getOrCreateSessionId } from '../../utils/session';

interface SessionProviderProps {
  children: React.ReactNode;
}

/**
 * SessionProvider component that initializes session ID on app load
 * This ensures a session ID is created as soon as the page loads
 */
const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize session ID when the app first loads
    const sessionId = getOrCreateSessionId();
    
    // Optional: Log session ID for debugging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Session ID initialized:', sessionId);
    }
  }, []);

  return <>{children}</>;
};

export default SessionProvider;