import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const DEMO_USERS = [
  { email: 'student@pathwave.com', password: 'student123', name: 'Ananya Sharma', university: 'University of Toronto', status: 'Application In Progress', country: 'Canada', level: "Master's" },
  { email: 'demo@pathwave.com', password: 'demo123', name: 'Rohan Mehta', university: 'University of Warwick', status: 'Offer Received', country: 'United Kingdom', level: 'Undergraduate' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { const s = localStorage.getItem('pw_user'); return s ? JSON.parse(s) : null; } catch { return null; }
  });

  const login = (email, password) => {
    const match = DEMO_USERS.find(u => u.email === email && u.password === password);
    if (match) {
      const { password: _, ...safe } = match;
      setUser(safe);
      localStorage.setItem('pw_user', JSON.stringify(safe));
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password.' };
  };

  const logout = () => { setUser(null); localStorage.removeItem('pw_user'); };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
