import { useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {

  const { login } = useContext(AuthContext);

  return (
    <>
        <button 
          className="btn"
          onClick={login}
          >
            Login
        </button>
    </>
  )
}
