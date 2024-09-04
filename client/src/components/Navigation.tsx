import { useEffect, useState } from "react"

interface Doctor {
  id: number
  nombre: string
  apellido: string
  especialidad: string
  email: string
  telefono: string
  imagen: string
}

interface NavigationProps {
  onSpecialtyChange: (specialty: string) => void
}

const Navigation = ({ onSpecialtyChange }: NavigationProps) => {
  const [specialties, setSpecialties] = useState<string[]>([])

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:3001/doctors`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data: Doctor[] = await response.json()
        const uniqueSpecialties = [...new Set(data.map(doctor => doctor.especialidad))]
        setSpecialties(uniqueSpecialties)
      } catch (err) {
        console.error("Doctor not found: ", err)
      }
    }

    fetchDoctors()
  }, [])

  return (
    <nav className="mx-auto mb-[20px] mt-[30px] rounded-lg bg-[#697cb5] px-[30px] py-[15px] shadow-2.5xl">
      <ul className="m-0 flex list-none flex-wrap justify-around gap-[10px] p-0">
        <li
          className="cursor-pointer text-base font-semibold text-[#333] transition-colors duration-[0.3s] ease-in *:hover:text-[#f0f3f0]"
          onClick={() => onSpecialtyChange("All")}
        >
          All
        </li>
        {specialties.map(specialty => (
          <li key={specialty} onClick={() => onSpecialtyChange(specialty)}>
            {specialty}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
