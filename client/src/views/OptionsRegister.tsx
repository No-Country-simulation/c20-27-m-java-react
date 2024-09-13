import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logoAzul from "@/assets/logoAzul.png"
import { CloseIcon } from "@/assets/icons"
import ModalRegister from "@/components/ModalRegister"

const OptionsRegister = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const navigate = useNavigate()

  const closeModalAndRedirect = () => {
    setIsModalOpen(false)
    navigate("/home")
  }

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <div className="relative flex w-full max-w-md flex-col items-center rounded-lg bg-white p-6 shadow-2xl">
            <button onClick={closeModalAndRedirect} className="absolute right-4 top-4 p-2">
              <img src={CloseIcon} alt="Close" className="h-6 w-6" />
            </button>
            <img src={logoAzul} alt="Logo" className="mx-auto mb-3 mt-3 block h-auto max-w-full" />
            <h1 className="mb-1 text-center text-lg font-semibold text-gray-800">
              <span className="text-gray-600">Health</span>{" "}
              <span className="text-gray-800">Tech</span>
            </h1>
            <ModalRegister onClose={closeModalAndRedirect} />
          </div>
        </div>
      )}
    </>
  )
}

export default OptionsRegister
