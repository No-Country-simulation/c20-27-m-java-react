import { Link } from "react-router-dom";
import DefaultImage from "@/assets/icons/photoDefault.svg";

export interface Doctor {
  idMedico: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
  telefono: string;
}

interface ModalProps {
  doctor: Doctor;
}

const Modal = ({ doctor }: ModalProps) => {
  return (
    <Link
      to={`/doctor/${doctor.idMedico}`} // Cambié esto a idMedico para una mejor identificación del doctor
      className="relative flex h-[125px] w-full rounded-xl bg-[#F3F4F6] p-2"
    >
      <figure className="mr-4 w-[109px] h-[109px]"> {/* Asegúrate de definir el tamaño */}
        <img src={DefaultImage} alt="Imagen del Doctor" className="w-full h-full object-cover" />
      </figure>

      <div className="pt-2">
        <h2 className="mb-2 border-b border-[#E5E7EB] text-base font-bold text-[#1F2A37]">
          {doctor.nombre} {doctor.apellido}
        </h2>
        <p className="mb-2 text-sm font-semibold text-[#4B5563]">{doctor.especialidad}</p>
        <p className="text-sm text-[#4B5563]">{doctor.email}</p>
      </div>
    </Link>
  );
}

export default Modal;
