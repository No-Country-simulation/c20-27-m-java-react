import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilo para la lista de doctores
const Lista = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  max-width: 1200px;
  margin: 0 auto;
`;

// Estilo para cada ítem de doctor con sombra añadida
const DoctorItem = styled.div`
  width: 250px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DoctorImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
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

interface DoctoresProps {
  especialidadSeleccionada: string;
}

const Doctores: React.FC<DoctoresProps> = ({ especialidadSeleccionada }) => {
  const [doctores, setDoctores] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/doctores')
      .then((response) => response.json())
      .then((data: Doctor[]) => {
        setDoctores(data);
      })
      .catch((error) => console.error('Error al cargar los doctores:', error));
  }, []);

  // Filtrar doctores según la especialidad seleccionada
  const doctoresFiltrados = especialidadSeleccionada === 'Todos'
    ? doctores
    : doctores.filter((doctor) => doctor.especialidad === especialidadSeleccionada);

  return (
    <Lista>
      {doctoresFiltrados.length > 0 ? (
        doctoresFiltrados.map((doctor) => (
          <DoctorItem key={doctor.id}>
            <DoctorImage src={doctor.imagen} />
            <h2>{doctor.nombre} {doctor.apellido}</h2>
            <p>Especialidad: {doctor.especialidad}</p>
            <p>Email: {doctor.email}</p>
            <p>Teléfono: {doctor.telefono}</p>
          </DoctorItem>
        ))
      ) : (
        <p>No hay doctores disponibles para la especialidad seleccionada.</p>
      )}
    </Lista>
  );
};

export default Doctores;


