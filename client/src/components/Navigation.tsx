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
    <nav className="mx-auto mb-[20px] mt-[30px] max-w-full overflow-x-auto rounded-lg px-[30px] py-[15px]">
      <ul className="flex list-none flex-wrap justify-center gap-[10px] p-0 m-0">
        <li
          className="cursor-pointer font-inter font-semibold text-[16px] text-[#333] transition-colors duration-300 ease-in-out hover:bg-[#1C2A3A] hover:text-[#f0f3f0] px-[20px] py-[10px] rounded-full bg-[#f0f3f0] border-2 border-black max-w-[150px] text-center"
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
