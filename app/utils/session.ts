// Session management utilities
const SESSION_KEY = 'painthill_session_id';

/**
 * Generates a unique session ID
 * Format: timestamp-random-string (e.g., "1691234567890-abc123def456")
 */
function generateSessionId(): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${randomString}`;
}

/**
 * Gets existing session ID from localStorage or creates a new one
 * @returns The session ID string
 */
export function getOrCreateSessionId(): string {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return 'server-side-session';
  }

  try {
    // Try to get existing session ID from localStorage
    const existingSessionId = localStorage.getItem(SESSION_KEY);
    
    if (existingSessionId) {
      return existingSessionId;
    }

    // Create new session ID if none exists
    const newSessionId = generateSessionId();
    localStorage.setItem(SESSION_KEY, newSessionId);
    
    return newSessionId;
  } catch (error) {
    // Fallback in case localStorage is not available
    console.warn('localStorage not available, using temporary session ID:', error);
    return generateSessionId();
  }
}

/**
 * Gets the current session ID without creating a new one
 * @returns The session ID string or null if none exists
 */
export function getCurrentSessionId(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return localStorage.getItem(SESSION_KEY);
  } catch (error) {
    console.warn('Error accessing localStorage:', error);
    return null;
  }
}

/**
 * Clears the current session ID (useful for testing or explicit session reset)
 */
export function clearSessionId(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.warn('Error clearing session ID:', error);
  }
}

/**
 * Hook to initialize session ID on page load
 */
export function useSessionId(): string {
  const [sessionId, setSessionId] = React.useState<string>('');

  React.useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
  }, []);

  return sessionId;
}

// For non-React usage, we need to import React
import React from 'react';