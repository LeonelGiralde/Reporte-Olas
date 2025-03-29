import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

export default function Navigation() {
    const { isLogged, hasRole, logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>Reporte Olas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to={routes.home}>Inicio</Nav.Link>
                    {!isLogged() && <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesión</Nav.Link>}
                    {isLogged() && <Nav.Link as={NavLink} to={routes.account} >Mi cuenta</Nav.Link>}
                    <Nav.Link as={NavLink} to={routes.reportes}>Reportes</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.novedades}>Novedades</Nav.Link>
                    
                </Nav>
                
                {isLogged() && hasRole("admin") && (
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to={routes.crearReporte}>Crear Reporte</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.crearNovedad}>Crear Novedad</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.reportes}>Ver mis reportes</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.novedades}>Ver mis novedades</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.usuarios}>Usuarios</Nav.Link>
                        {isLogged() && <Nav.Link as={NavLink} to={routes.login} onClick={logout}>Cerrar Sesión</Nav.Link>}
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

