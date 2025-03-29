import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import editAccoutnResolver from "../../../validations/editAccoutnResolver"; // Asegúrate de importar correctamente
import useAuth  from "../../../auth/useAuth";

export default function ChangePassword({ isOpen, closeEditModal }) {
    const {updateUser}= useAuth(); // Asegúrate de importar el contexto de autenticación correctamente
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: editAccoutnResolver,
    });

    const onSubmit = (formData) => {
        
        alert("Cambiando contraseña");
        updateUser(formData);
      };

    return (
        <Modal show={isOpen} onHide={closeEditModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar mi cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* Cambiar nombre */}
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="Text" 
                            placeholder="Cambia el nombre"
                            {...register("name")}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    {/* Cambiar email */}
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="Text" 
                            placeholder="Cambia el email"
                            {...register("email")}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                   {/*----- Cambiar rol------------
                    <Form.Group className="mb-3">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control as="select" {...register("role")}>
                            <option key={role} value="user">Usuario</option>
                            <option key={role} value="admin">Administrador</option>
                        </Form.Control>
                        
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>*/ }

                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeEditModal}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Actualizar mi cuenta
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
