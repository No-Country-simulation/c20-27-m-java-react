import { useState, ChangeEvent, useEffect } from "react"
import { SearchIcon } from "@/assets/icons"
import { useFetchDoctor } from "@/hooks/useFetchDoctor"
import Modal from "@/components/Modal"

interface ExtendedFormEvent extends ChangeEvent<HTMLInputElement> {}

const SearchInput = () => {
  const [apellido, setApellido] = useState<string>("")
  const [idDoctor, setIdDoctor] = useState<number>(0)
  const [data, loading, error] = useFetchDoctor(idDoctor)
  const [showModal, setShowModal] = useState<boolean>(true)

  const handleInputChange = (e: ExtendedFormEvent) => {
    setApellido(e.target.value)
    setShowModal(true)
  }

  useEffect(() => {
    const fetchDoctorId = async () => {
      if (apellido.trim() === "") {
        setIdDoctor(0)
        return
      }

      try {
        const response = await fetch(
          `https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors/findby/${apellido}`,
        )
        if (!response.ok) {
          throw new Error("No se pudo encontrar el doctor")
        }
        const doctor = await response.json()
        setIdDoctor(doctor.idMedico)
      } catch (err) {
        console.error(err)
        setIdDoctor(0)
      }
    }

    fetchDoctorId()
  }, [apellido])

  return (
    <div className="relative mb-2">
      <figure className="absolute top-2 pl-4">
        <img src={SearchIcon} alt="" />
      </figure>
      <input
        type="text"
        placeholder="Search doctor..."
        className="mb-2 h-[40px] w-full rounded-xl bg-[#f3f4f6] pl-[52px] outline-none"
        value={apellido}
        onChange={handleInputChange}
      />
      {data.length > 0 &&
        showModal &&
        data.map(doctor => <Modal key={doctor.idMedico} doctor={doctor} />)}
      {/* {loading && <p>Cargando...</p>} */}
      {/* {error instanceof Error && <p>Error: {error.message}</p>} */}
    </div>
  )
}

export default SearchInput
