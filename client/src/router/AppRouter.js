import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CrearReportePage from "../pages/CrearReportePage";
import CrearNovedadPage from "../pages/CrearNovedadPage";
import ReportesPage from "../pages/ReportesPage";
import NovedadesPage from "../pages/NovedadesPage";
import ReporteIdPage from "../pages/ReporteIDPage";
import NovedadIdPage from "../pages/NovedadIDPage";
import UsuariosPage from "../pages/UsersPage"; // Agregar esta página si no está
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/RegisterPage";
import Layout from "../components/Layouts/Layout";
import PrivateRoute from "../router/PrivateRoute";
import Account from "../pages/AccountPage/AccountPage";
import PublicRoute from "../router/PublicRoute";
import routes from "../helpers/routes";

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={routes.home} element={<HomePage />} />
                    <Route path={routes.login} element={<PublicRoute><LoginPage /></PublicRoute>} />
                    <Route path={routes.reportes} element={<ReportesPage />} />
                    <Route path={routes.novedades} element={<NovedadesPage />} />
                    <Route path={routes.register} element={<Register />} />

                    {/* Rutas privadas */}
                    <Route path={routes.crearReporte} element={
                        <PrivateRoute hasRole="admin">
                            <CrearReportePage />
                        </PrivateRoute>
                    } />
                    <Route path={routes.crearNovedad} element={
                        <PrivateRoute hasRole="admin">
                            <CrearNovedadPage />
                        </PrivateRoute>
                    } />
                    <Route path={routes.misReportes} element={
                        <PrivateRoute hasRole="admin">
                            <ReporteIdPage />
                        </PrivateRoute>
                    } />
                    <Route path={routes.misNovedades} element={
                        <PrivateRoute hasRole="admin">
                            <NovedadIdPage />
                        </PrivateRoute>
                    } />
                    <Route path={routes.usuarios} element={
                        <PrivateRoute hasRole="admin">
                            <UsuariosPage />
                        </PrivateRoute>
                    } />

                    <Route path={routes.account} element={
                        <PrivateRoute hasRole="admin">
                            <Account />
                        </PrivateRoute>
                    } />

                    {/* Ruta no encontrada */}
                    <Route path={routes.notFound} element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}
