import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import editAccoutnResolver from "../../../validations/editAccoutnResolver"; // Asegúrate de importar correctamente
import useAuth  from "../../../auth/useAuth";
import roles from "../../../helpers/roles";
import { useEffect } from "react";


export default function EditModal({ isOpen, close, user }) {
   
    const {updateUser, hasRole}= useAuth(); 
    const { register, handleSubmit, formState: { errors, dirtyFields }, reset} = useForm({
        resolver: editAccoutnResolver,
    });
    const isDirty = !!Object.keys(dirtyFields).length;

    const onSubmit = (formData) => {
        
        if(!isDirty) return;
        updateUser(formData)
        close()
      };
       
    useEffect(()=>{
        if(!isOpen){
            reset()
        }
    },[isOpen, reset])

    useEffect(()=>{
        if(user)reset({
            name:user.name,
            email:user.email,
            role:user.role
        });
    },[reset, user])

    return (
        <Modal show={isOpen} onHide={close} centered>
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
                    
                   
                    <Form.Group className="mb-3">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control 
                        as="select" 
                        disabled={!hasRole("admin")}
                        {...register("role")}>
                            
                            {Object.keys(roles).map((role) => (
                                    <option key={role}>{role}</option>
                                ))}
                        </Form.Control>
                        
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)} disabled={!isDirty}>
                            Actualizar mi cuenta
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
