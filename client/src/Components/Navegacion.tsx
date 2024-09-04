import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilo para el contenedor de navegación
const NavContainer = styled.nav`
  background-color: #697cb5;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 30px auto 20px;
  max-width: 1200px;
  width: 100%;
`;

// Estilo para la lista de navegación
const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  gap: 10px; 
  flex-wrap: wrap; 
`;

// Estilo para cada ítem de navegación
const NavItem = styled.li`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f0f3f0;
  }
`;
interface Doctor {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
  telefono: string;
  imagen: string;
}

interface NavegacionProps {
  onEspecialidadChange: (especialidad: string) => void;
}

const Navegacion: React.FC<NavegacionProps> = ({ onEspecialidadChange }) => {
  const [especialidades, setEspecialidades] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/doctores')
      .then((response) => response.json())
      .then((data: Doctor[]) => {
        // Obtener las especialidades únicas
        const especialidadesUnicas = [
          ...new Set(data.map((doctor) => doctor.especialidad))
        ];
        setEspecialidades(especialidadesUnicas);
      })
      .catch((error) => console.error('Error al cargar las especialidades:', error));
  }, []);

  return (
    <NavContainer>
      <NavList>
        <NavItem onClick={() => onEspecialidadChange('Todos')}>Todos</NavItem>
        {especialidades.map((especialidad) => (
          <NavItem key={especialidad} onClick={() => onEspecialidadChange(especialidad)}>
            {especialidad}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Navegacion;


