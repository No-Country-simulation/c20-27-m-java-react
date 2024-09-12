import { useNavigate } from "react-router-dom"
import logoAzul from "@/assets/logoAzul.png"
import { ArrowIcon } from "@/assets/icons"
import ModalRegister from "@/components/ModalRegister"

const Register = () => {
  const navigate = useNavigate()

  const closePage = () => {
    navigate("/home")
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100">
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50"></div>

      {/* Modal Content */}
      <div className="relative z-50 flex max-h-[90vh] max-w-4xl flex-col items-center overflow-y-auto rounded-lg bg-white p-8 shadow-lg">
        <button
          onClick={closePage}
          className="absolute left-4 top-4 p-2 text-gray-500 hover:text-gray-700"
        >
          <img src={ArrowIcon} alt="Close" className="h-7 w-7" />
        </button>
        <img src={logoAzul} alt="Logo" className="mt-30 mx-auto mb-3 block h-10 max-w-full" />
        <h2 className="mb-4 text-xl text-gray-800">
          Health<span className="text-gray-600">Tech</span>
        </h2>
        <ModalRegister onClose={closePage} />
      </div>
    </div>
  )
}

export default Register
