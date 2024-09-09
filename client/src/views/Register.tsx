import { useNavigate } from "react-router-dom"
import ModalBackground from "@/components/ModalBackground"
import Formulario from "@/components/RegistrationForm"
import Button from "@/components/Button"
import logoAzul from "@/assets/logoAzul.png"
import { CloseIcon } from "@/assets/icons"

const Register = () => {
  const navigate = useNavigate()

  const closeModal = () => {
    navigate("/home")
  }

  return (
    <ModalBackground>
      <div className="relative flex flex-col items-center rounded-lg bg-white p-5 shadow-xl">
        <button onClick={closeModal} className="absolute right-4 top-4 p-2">
          <img src={CloseIcon} alt="Close" className="h-6 w-6" />
        </button>
        <img src={logoAzul} alt="Logo" className="mx-auto block h-auto max-w-full" />
        <h1 className="mb-1 text-center text-lg font-semibold text-gray-800">
          <span className="text-gray-600">Health</span> <span className="text-gray-800">Tech</span>
        </h1>
        <h2 className="mb-3 text-center text-sm font-bold text-gray-800">Crea tu cuenta</h2>
        <p className="text-center text-xs font-semibold text-gray-500">Estamos para ayudarte</p>
        <Formulario />
        <Button label="Crear perfil" />
      </div>
    </ModalBackground>
  )
}

export default Register
