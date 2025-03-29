import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../helpers/routes"
export default function HomePage() {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h2> Bienvenido a Reporte olas</h2>
                        <p> Aca vas a poder ver todos los reportes y subir tus actuales</p>
                        <div> <Button as={Link} to={routes.login}>Ingresa</Button>
                         o <Button as={Link} to={routes.register}>Crea una cuenta</Button></div>
                   </Col>
                </Row>
            </Container>
            
        </div>
    )
}