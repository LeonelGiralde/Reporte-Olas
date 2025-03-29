import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

export default function PrivateRoute({ hasRole: role, children }) {
    const location = useLocation();
    const { hasRole, isLogged } = useAuth();

    if (!isLogged()) return <Navigate to={routes.login} state={{ from: location }} />;

    if (role && !hasRole(role)) return <Navigate to={routes.home} />;

    return children;  // ✅ IMPORTANTE: Debe renderizar children correctamente
}
