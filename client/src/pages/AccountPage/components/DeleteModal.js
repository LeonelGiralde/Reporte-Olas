import { Modal, Button } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
export default function DeleteModal({ isOpen, closeDeleteModal }) {

    const {logout}  = useAuth();
    const handleDelete = ()=>{
        //peticion http
        //closeDeleteModal();
        logout();
    }
    return (
        <Modal show={isOpen} onHide={closeDeleteModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDeleteModal}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Eliminar mi cuenta
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
