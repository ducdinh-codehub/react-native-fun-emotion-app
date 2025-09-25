import { createContext, useContext, useState } from 'react';
import { AuthState } from '../screen/auth/auth.interface';

type AuthProvider = {
  setSignIn: (val: boolean) => void;
  getSignIn: () => boolean;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthProvider>({} as AuthProvider);

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [isLogin, setIsLogin] = useState(false);

  const setSignIn = (input: boolean) => {
    setIsLogin(input);
  };

  const getSignIn = (): boolean => {
    return isLogin;
  };

  return (
    <AuthContext.Provider value={{ setSignIn, getSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
