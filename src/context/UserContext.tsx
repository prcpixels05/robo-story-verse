
import { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  profileImage: string;
}

interface UserContextType {
  user: UserProfile;
  isLoggedIn: boolean;
  isAdmin: boolean;
  updateUser: (userData: Partial<UserProfile>) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const defaultUser: UserProfile = {
  name: "Reader",
  email: "reader@example.com",
  bio: "Avid book lover and literary enthusiast.",
  profileImage: "/placeholder.svg"
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile>(() => {
    // Try to load user data from localStorage on initial load
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : defaultUser;
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  const updateUser = (userData: Partial<UserProfile>) => {
    setUser(prevUser => {
      const updatedUser = { ...prevUser, ...userData };
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const login = async (email: string, password: string) => {
    // Check for admin login
    if (email === "admin@stobo.ai" && password === "admin123") {
      setIsLoggedIn(true);
      setIsAdmin(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "true");
      return true;
    }
    
    // For regular user login (mock implementation)
    if (email && password) {
      setIsLoggedIn(true);
      setIsAdmin(false);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "false");
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, isAdmin, updateUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
