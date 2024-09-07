import { Link } from "react-router-dom"

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
      className="absolute top-[50px] z-50 flex h-[88px] w-full rounded-xl bg-[#F3F4F6] pl-2 pt-2"
    >
      <div>
        <h2>
          {doctor.nombre} {doctor.apellido}
        </h2>
        <p>{doctor.especialidad}</p>
        <p>{doctor.email}</p>
        <p>{doctor.telefono}</p>
      </div>
    </Link>
  )
}

export default Modal
