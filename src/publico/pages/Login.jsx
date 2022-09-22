import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {

    const { login } = useContext(AuthContext);

    return (
        <>
            <button
                onClick={login}
                className="btn">
                Login
            </button>
        </>
    )
}
