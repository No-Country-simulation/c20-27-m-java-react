import { useState } from "react"
import { ArrowIcon } from "../assets/icons/index"
import SearchDoctors from "../components/SearchDoctors"
import Navigation from "../components/Navigation"
import DoctorsList from "../components/DoctorsList"
import { Link } from "react-router-dom"
import React from "react"

const AllDoctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All")

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty)
  }

  return (
    <section className="mt-4"> 
    <div className="flex items-center mb-3">
      <Link to="/" className="mr-auto">
      <figure> 
        <img src={ArrowIcon} alt="" />
      </figure>
      </Link>
      <h2 className="text-xl text-[#374151] font-semibold mr-auto">
        All Doctors
      </h2>
    </div>
      <SearchDoctors onSearch={handleSpecialtyChange}/>
      <Navigation onSpecialtyChange={handleSpecialtyChange} />
      <DoctorsList selectedSpecialty={selectedSpecialty} />
    </section>
  )
}

export default AllDoctors