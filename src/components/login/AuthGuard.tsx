import { useEffect, useState, ReactNode } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const AuthGuard = ({ children, fallback = <Navigate to="/login" /> }: AuthGuardProps) => {
  
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(Boolean(user));
      setIsCheckingAuth(false);
    });
  }, [auth]);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <>{children}</> : <>{fallback}</>;
};

