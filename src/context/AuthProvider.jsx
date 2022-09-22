import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({ children }) => {

    
    
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const login = localStorage.getItem('isLogin');
      console.log(login);
      setIsLogin(login);

    if(!isLogin) return;

    }, [isLogin])

    const login = () => {
        setIsLogin(true);
        localStorage.setItem('isLogin', true);
    }

    const logout = () => {
        setIsLogin(false);
        localStorage.removeItem('isLogin');
    }

    return(
        <AuthContext.Provider value={{
            isLogin,
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )

}
