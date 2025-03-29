import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import DeleteModal from "./components/DeleteModal";
import ChangePaswordModal from "./components/ChangePasword";
import useModal from "../../hooks/useModal";
import EditModal from "./components/EditModal";
import ProfilePicModal from "./components/ProfilePicModal";

export default function AccountPage() {
   
    const { user } = useAuth();
    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal]= useModal();
    const [isOpenChangePaswordModal, openChangePaswordModal, closeChangePaswordModal]= useModal();
    const [isOpenEditModal, openEditModal, closeEditModal]= useModal();
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal]= useModal();
  
    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col xs={12} className="text-center">
                        <img
                            src="/img/Profile-PNG-Photo.png"
                            alt="profile"
                            onClick={openProfilePicModal}
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                cursor:"pointer"
                            }}
                        />
                    </Col>
                    <Col className="mt-4">
                        <Card className="mx-auto p-4">
                            <p className="text-center">
                                <b>Nombre: </b>
                                {user?.name}
                            </p>
                            <p className="text-center">
                                <b>Email: </b>
                                {user?.email}
                            </p>
                            <p className="text-center">
                                <b>Rol: </b>
                                {user?.role}
                            </p>
                            <Button variant="warning"
                             onClick={openEditModal}
                            >Editar cuenta</Button>
                            
                            <Button variant="link" className="mt-1"
                            onClick={openChangePaswordModal} >
                                Cambiar contraseña
                            </Button>
                            <Button
                                variant="link"
                                className="mt-3 text-danger"
                                onClick={openDeleteModal} // <-- Abre el modal al hacer clic
                            >
                                Eliminar cuenta
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Solo renderiza el modal cuando isOpenDeleteModal es true */}
            {isOpenDeleteModal && (
                <DeleteModal 
                isOpen={isOpenDeleteModal} 
                closeDeleteModal={closeDeleteModal}
                 />
            )}
            {isOpenChangePaswordModal && (
                <ChangePaswordModal 
                isOpen={isOpenChangePaswordModal} 
                closeChangePaswordModal={closeChangePaswordModal}
                 />
            )}
            {isOpenEditModal && (
                <EditModal 
                isOpen={isOpenEditModal} 
                close={closeEditModal} 
                user={user}
                />
            )}
            {isOpenProfilePicModal && (
                <ProfilePicModal 
                isOpen={isOpenProfilePicModal} 
                close={closeProfilePicModal} 
                user={user}
                />
            )}
        </>
    );
}
