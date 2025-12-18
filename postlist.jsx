import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostsList = () => {
  const [lista, setLista] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const navigate = useNavigate();

  // Función para cargar datos asíncronamente
  const obtenerPosts = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/posts?_page=${paginaActual}&_limit=5`);
      const datos = await respuesta.json();
      setLista(datos);
    } catch (error) {
      console.error("Error cargando posts:", error);
    }
  };

  useEffect(() => {
    obtenerPosts();
  }, [paginaActual]);

  return (
    <div className="container">
      <h2>Blog Posts - Página {paginaActual}</h2>

      <div className="lista-posts">
        {lista.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="controles">
        <button 
          onClick={() => setPaginaActual(paginaActual - 1)} 
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        
        <button 
          style={{ marginLeft: "10px" }}
          onClick={() => setPaginaActual(paginaActual + 1)} 
          disabled={lista.length < 5}
        >
          Siguiente
        </button>
      </div>

      <br />
      <button onClick={() => navigate("/create")}>Nuevo Post</button>
    </div>
  );
};

export default PostsList;
