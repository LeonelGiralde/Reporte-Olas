import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de importar los estilos de react-toastify

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
     </React.StrictMode>
);

