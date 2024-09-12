import React from 'react';
import { photoDefaultIcon } from '@/assets/icons';

interface Doctor {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
  telefono: string;
  imagen: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <div
      key={doctor.id}
      className="m-4 w-60 rounded-lg border border-gray-300 bg-white p-4 text-center shadow-lg"
    >
      <figure className="h-24 w-24 mx-auto overflow-hidden rounded-full flex justify-center items-center bg-gray-100">
        <img
          src={doctor.imagen || photoDefaultIcon}
          alt={`${doctor.nombre} ${doctor.apellido}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {doctor.nombre} {doctor.apellido}
      </h2>
      <p className="mt-1 text-sm text-gray-600">{doctor.especialidad}</p>
      <p className="mt-1 text-sm text-gray-600">{doctor.email}</p>
      <p className="mt-1 text-sm text-gray-600">Contacto: {doctor.telefono}</p>
      
    
      <div className="mt-4"></div>
      <button
        onClick={onBookAppointment}
        className="mt-3 p-2 bg-[#1C2A3A] font-bold text-white rounded hover:bg-[#142031] text-sm transition-colors duration-300 ease-in-out"
      >
        Agendar Cita
      </button>
    </div>
  );
};

export default DoctorCard;

