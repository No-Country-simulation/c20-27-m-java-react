import { useState, ChangeEvent } from "react"
import { SearchIcon } from "@/assets/icons"
import { useFetchDoctor } from "@/hooks/useFetchDoctor"
import Modal from "@/components/Modal"

interface ExtendedFormEvent extends ChangeEvent<HTMLInputElement> {}

const SearchInput = () => {
  const [surname, setSurname] = useState<string>("")
  const [data, loading, error] = useFetchDoctor(surname)
  const [showModal, setShowModal] = useState<boolean>(true)

  const handleInputChange = (e: ExtendedFormEvent) => {
    setSurname(e.target.value)
    setShowModal(true)
  }

  return (
    <div className="mb-2">
      <figure className="absolute top-[85px] pl-4">
        <img src={SearchIcon} alt="" />
      </figure>
      <input
        type="text"
        placeholder="Search doctor..."
        className="mb-2 h-[40px] w-full rounded-xl bg-[#f3f4f6] pl-[52px]"
        value={surname}
        onChange={handleInputChange}
      />
      {data && showModal && <Modal doctor={data} />}
      {/* {loading && <p>Cargando...</p>}
      {error instanceof Error && <p>Error: {error.message}</p>} */}
    </div>
  )
}

export default SearchInput
