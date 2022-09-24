import { useState, useEffect } from 'react';
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
      const login = localStorage.getItem("isLogin");

      setIsLogin(login);        

    }, [isLogin]);
    


    const login = () => {
        setIsLogin(true);
        localStorage.setItem("isLogin", true);
    }

    const logout = () => {
        setIsLogin(false);
        localStorage.removeItem("isLogin");
    }


  return (
    <AuthContext.Provider
    value={{
        isLogin,
        login,
        logout,
    }}  
    >
        {children}
    </AuthContext.Provider>
  )
}
