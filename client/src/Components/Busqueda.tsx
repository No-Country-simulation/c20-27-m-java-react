import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/inter/300.css";

// Estilo para el contenedor de la página
const ContenedorPagina = styled.div`
  display: flex;
  justify-content: center; 
  padding-top: -120px; 
`;

// Estilo para el contenedor del input
const ContenedorInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px; 
`;

// Estilo para la imagen de lupa
const Lupa = styled.img`
  position: absolute;
  left: 10px; 
  width: 24px;
  height: 24px;
  opacity: 1; 
`;

// Estilo para el input de búsqueda
const Buscar = styled.input`
  padding: 10px 10px 10px 40px; 
  font-family: "Inter", sans-serif; 
  font-weight: 300; 
  background-color: #f3f4f6; 
  border: none; 
  border-radius: 5px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  width: 100%; 
  text-align: center;
`;


const Busqueda: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para manejar la búsqueda aquí
    console.log("Buscando:", query);
  };

  return (
    <ContenedorPagina>
      <form onSubmit={handleSubmit}>
        <ContenedorInput>
          <Lupa src="/img/buscar.png" alt="Buscar" />
          <Buscar
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Buscar..."
          />
        </ContenedorInput>
      </form>
    </ContenedorPagina>
  );
};

export default Busqueda;

