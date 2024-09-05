import React from "react"
import { useEffect, useState } from "react"

interface Doctor {
  id: number
  name: string
  lastname: string
  speciality: string
  email: string
  telephone: string
  imagen: string
}

interface NavigationProps {
  onSpecialtyChange: (specialty: string) => void
}

const Navigation = ({ onSpecialtyChange }: NavigationProps) => {
  const [specialties, setSpecialties] = useState<string[]>([])

  async function fetchDoctor() {
    try {
        const response = await fetch(`http://localhost:8080/doctors/findby/${apellido}`);
        if (!response.ok) {
            throw new Error('Doctor not found');
        }
        const data = await response.json();
        // Procesar los datos
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
}



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
