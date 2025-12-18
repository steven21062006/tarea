import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  
  // Usamos un solo estado tipo objeto para simplificar
  const [formulario, setFormulario] = useState({
    titulo: "",
    contenido: ""
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const guardarPost = async (e) => {
    e.preventDefault();

    if (!formulario.titulo || !formulario.contenido) {
      alert("Por favor completa la información.");
      return;
    }

    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        title: formulario.titulo, 
        body: formulario.contenido 
      }),
    });

    alert("¡Post guardado con éxito!");
    navigate("/posts");
  };

  return (
    <div>
      <h2>Añadir Entrada</h2>
      <form onSubmit={guardarPost}>
        <div>
          <label>Título:</label>
          <input
            name="titulo"
            type="text"
            value={formulario.titulo}
            onChange={manejarCambio}
          />
        </div>
        
        <div>
          <label>Texto:</label>
          <textarea
            name="contenido"
            value={formulario.contenido}
            onChange={manejarCambio}
          />
        </div>

        <button type="submit">Guardar</button>
        <button type="button" onClick={() => navigate("/posts")}>Cancelar</button>
      </form>
    </div>
  );
};

export default NewPost;
