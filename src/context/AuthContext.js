import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('pw_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    // Demo credentials — replace with real backend auth
    const DEMO_USERS = [
      { email: 'student@pathwave.com', password: 'student123', name: 'Ananya Sharma', university: 'University of Toronto', status: 'Application In Progress', country: 'Canada', level: "Master's" },
      { email: 'demo@pathwave.com', password: 'demo123', name: 'Rohan Mehta', university: 'University of Warwick', status: 'Offer Received', country: 'United Kingdom', level: 'Undergraduate' },
    ];
    const match = DEMO_USERS.find(u => u.email === email && u.password === password);
    if (match) {
      const { password: _, ...safeUser } = match;
      setUser(safeUser);
      localStorage.setItem('pw_user', JSON.stringify(safeUser));
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pw_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
