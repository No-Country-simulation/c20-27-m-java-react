import { useState } from "react"
import { ArrowIcon } from "@/assets/icons"
import SearchDoctors from "@/components/SearchDoctors"
import Navigation from "@/components/Navigation"
import DoctorsList from "@/components/DoctorsList"
import { Link } from "react-router-dom"

const AllDoctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All")

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty)
  }

  return (
    <section className="mt-4">
      <div className="mb-3 flex items-center">
        <Link to="/" className="mr-auto">
          <figure>
            <img src={ArrowIcon} alt="" />
          </figure>
        </Link>
        <h2 className="mr-auto text-xl font-semibold text-[#374151]">All Doctors</h2>
      </div>
      <SearchDoctors onSearch={handleSpecialtyChange} />
      <Navigation onSpecialtyChange={handleSpecialtyChange} />
      <DoctorsList selectedSpecialty={selectedSpecialty} />
    </section>
  )
}

export default AllDoctors
