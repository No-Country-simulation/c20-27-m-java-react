import { useEffect, useState } from "react"
import DoctorCard from "@/components/DoctorCard"

interface Doctor {
  id: number
  nombre: string
  apellido: string
  especialidad: string
  email: string
  telefono: string
  imagen: string
}

interface DoctorsProps {
  selectedSpecialty: string
}

const DoctorsList = ({ selectedSpecialty }: DoctorsProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([])

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:8080/doctors`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data: Doctor[] = await response.json()
        setDoctors(data)
      } catch (err) {
        console.error("Doctor not found: ", err)
      }
    }

    fetchDoctors()
  }, [doctors])

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctors
      : doctors.filter(doctor => doctor.especialidad === selectedSpecialty)

  return (
    <section className="mx-auto my-0 flex flex-wrap justify-center">
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)
      ) : (
        <p>No hay doctores disponibles para la especialidad {selectedSpecialty}.</p>
      )}
    </section>
  )
}

export default DoctorsList
