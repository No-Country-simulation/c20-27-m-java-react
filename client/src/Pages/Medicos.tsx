import { useState } from 'react';
import Busqueda from '../Components/Busqueda';
import styled from "styled-components";
import '@fontsource/inter/600.css';
import Navegacion from '../Components/Navegacion';
import Doctores from '../Components/Lista'; // Asegúrate de que esta ruta es correcta

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px; 
`;

const Titulo = styled.h1`
  width: 198px;
  height: 27px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  margin: 0;
`;

const Flecha = styled.img`
  position: absolute;
  margin-left: 260px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
`;

const Medicos = () => {
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState<string>('Todos');

  const handleEspecialidadChange = (especialidad: string) => {
    setEspecialidadSeleccionada(especialidad);
  };

  return (
    <Container>
      <Titulo>
        Todos los doctores
        <Flecha src="/img/flecha.png" />
      </Titulo>
      <Busqueda onSearch={handleEspecialidadChange} />
      <Navegacion onEspecialidadChange={handleEspecialidadChange} />
      <Doctores especialidadSeleccionada={especialidadSeleccionada} />
    </Container>
  );
}

export default Medicos;

