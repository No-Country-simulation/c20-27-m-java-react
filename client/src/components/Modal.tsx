import { Link } from "react-router-dom"
import DoctorProfile from "@/assets/doctorprofile.svg"

export interface Doctor {
  idMedico: number
  nombre: string
  apellido: string
  especialidad: string
  email: string
  telefono: string
}

interface ModalProps {
  doctor: Doctor
}

const Modal = ({ doctor }: ModalProps) => {
  return (
    <Link
      to={`/doctor/${doctor.nombre}`}
      key={doctor.idMedico}
      className="absolute top-[50px] z-50 flex h-[125px] w-full rounded-xl bg-[#F3F4F6] pl-2 pt-2"
    >
      <figure className="mr-4 size-[109px]">
        <img src={DoctorProfile} alt="" />
      </figure>

      <div className="pt-2">
        <h2 className="mb-2 border-b border-[#E5E7EB] text-base font-bold text-[#1F2A37]">
          {doctor.nombre} {doctor.apellido}
        </h2>
        <p className="mb-2 text-sm font-semibold text-[#4B5563]">{doctor.especialidad}</p>
        <p className="text-sm text-[#4B5563]">{doctor.email}</p>
      </div>
    </Link>
  )
}

export default Modal
