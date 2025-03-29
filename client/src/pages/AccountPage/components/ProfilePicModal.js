import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

//import useAuth from "../../../auth/useAuth";

export default function ProfilePicModal({ isOpen, closeDeleteModal }) {
    const [fileName, setFileName] = useState("Subir una imagen")
    const [selectedFile, setSelectedFile]= useState (null)
   
   
    const handleFileChange = (e) => {
        const [file] = e.target.files;
        const SIZE_50MB = 50 * 1024 * 1024;
        const isValidSize = file.size < SIZE_50MB;
        const isNameOfOneImageRegEx = /\.(jpe?g|gif|png)$/i; // Corrección en la expresión regular
        const isValidType = isNameOfOneImageRegEx.test(file.name);
    
        if (!isValidSize) {
            Alert.error("Imagen muy pesada, máximo 50MB"); // Usando toast
            return;
        }
    
        if (!isValidType) {
            Alert.error("Solo podés subir imágenes");
            return;
        }
        setFileName(file.name)
        const reader =  new FileReader();
        reader.onloadend= ()=>{
            
        setSelectedFile(reader.result)

        }
        reader.readAsDataURL(file)
    }
    return (
        <Modal show={isOpen} onHide={closeDeleteModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>Cambiar mi foto de perfil</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group controlId="formFile">
        <Form.Label>{fileName}</Form.Label>
        <Form.Control
          type="file"
          accept=".jpg, .jpeg, .gif, .png"
          onChange={handleFileChange}
        />
      </Form.Group>
    </Form>
    <h2>Preview de imagen</h2>
    {selectedFile && (
      <img className="img-fluid" src={selectedFile} alt="profile-preview" />
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={closeDeleteModal}>
      Cancelar
    </Button>
    <Button variant="primary">Actualizar imagen</Button>
  </Modal.Footer>
</Modal>

    );
}
