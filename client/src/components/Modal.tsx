import React from "react"
import { Link } from "react-router-dom"

export interface Doctor {
  id: number
  avatar: string
  lastname: string
  specialty: string
}

interface ModalProps {
  doctor: Doctor
}

const Modal = ({ doctor }: ModalProps) => {
  return (
    <Link
      to={`/doctor/${doctor.lastname}`}
      key={doctor.id}
      className="absolute top-[50px] z-50 flex h-[88px] w-full rounded-xl bg-[#F3F4F6] pl-2 pt-2"
    >
      <figure>
        <img src={doctor.avatar} alt={doctor.lastname} />
      </figure>

      <div className="">
        <h2>{doctor.lastname}</h2>
        <p>{doctor.specialty}</p>
      </div>
    </Link>
  )
}

export default Modal
