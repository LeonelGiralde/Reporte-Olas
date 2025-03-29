import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRoute({ restricted, children }) {
    const { isLogged } = useAuth();

    if (restricted && isLogged()) {
        return <Navigate to="/" />;
    }

    return children;
}
