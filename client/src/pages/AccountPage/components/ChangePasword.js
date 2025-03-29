import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import changePasswordResolver from "../../../validations/changePasswordResolver"; // Asegúrate de importar correctamente

export default function ChangePassword({ isOpen, closeChangePaswordModal }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: changePasswordResolver,
    });

    const onSubmit = (formData) => {
        console.log(formData);
        alert("Cambiando contraseña");
        closeChangePaswordModal(); // Cerrar el modal después de actualizar la contraseña
    };

    return (
        <Modal show={isOpen} onHide={closeChangePaswordModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Contraseña actual */}
                    {/*
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Ingresa tu contraseña actual"
                            {...register("currentPassword")}
                            isInvalid={!!errors.currentPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.currentPassword?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    */}

                    {/* Nueva contraseña */}
                    <Form.Group className="mb-3">
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Nueva contraseña"
                            {...register("newPassword")}
                            isInvalid={!!errors.newPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.newPassword?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Confirmar nueva contraseña */}
                    {/*
                    <Form.Group className="mb-3">
                        <Form.Label>Confirmar nueva contraseña</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Repite la nueva contraseña"
                            {...register("confirmPassword")}
                            isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.confirmPassword?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    */}

                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeChangePaswordModal}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Actualizar contraseña
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
