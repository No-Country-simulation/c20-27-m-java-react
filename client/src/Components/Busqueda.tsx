import React, { useState } from 'react';
import styled from 'styled-components';
import '@fontsource/inter/300.css';

const ContenedorPagina = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const ContenedorInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
`;

const Lupa = styled.img`
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;
  opacity: 1;
`;

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

  &:focus {
    background-color: #e0e0e0;
    outline: none;
  }
`;

interface BusquedaProps {
  onSearch: (query: string) => void;
}

const Busqueda: React.FC<BusquedaProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Llama a onSearch cuando el texto cambie
  };

  return (
    <ContenedorPagina>
      <form onSubmit={(e) => e.preventDefault()}>
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


