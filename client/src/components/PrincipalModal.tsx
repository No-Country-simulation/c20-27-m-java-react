import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logoAzul from "@/assets/logoAzul.png"
import useCheckUsername from "@/hooks/useCheckUsername"
import CreateUserModal from "./CreateUserModal"
import ModalRegister from "./ModalRegister"

const PrincipalModal = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showModal, setShowModal] = useState(true)
  const [showCreateUserModal, setShowCreateUserModal] = useState(false)
  const [showModalRegister, setShowModalRegister] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const { isLoading, authenticated, error, CheckCredentials } = useCheckUsername()

  const handleLoginClick = async () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, ingresa un usuario y contraseña")
      return
    }

    await CheckCredentials(username, password)

    if (isLoading) {
      return
    }

    if (error) {
      setErrorMessage(
        "Credenciales no válidas. Intenta de nuevo o haz click en el botón de crear cuenta.",
      )
      setUsername("")
      setPassword("")
      return
    }

    if (authenticated) {
      setShowModal(false)
      navigate("/home")
    }
  }

  const handleCreateAccountClick = () => {
    setShowModal(false)
    setShowCreateUserModal(true)
  }

  const handleCloseCreateUserModal = () => {
    setShowCreateUserModal(false)
    setShowModalRegister(true)
  }

  const handleOpenModalRegister = () => {
    setShowCreateUserModal(false)
    setShowModalRegister(true)
  }

  const handleCloseModalRegister = () => {
    setShowModalRegister(false)
    setShowModal(true)
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    if (errorMessage) {
      setErrorMessage("")
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (errorMessage) {
      setErrorMessage("")
    }
  }

  if (!showModal && !showCreateUserModal && !showModalRegister) return null

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="z-60 relative mb-5 flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-4 shadow-lg">
            <img src={logoAzul} alt="Logo" className="mx-auto mb-3 mt-4 h-10 max-w-full" />
            <h2 className="mb-4 text-xl text-gray-800">
              Health
              <span className="text-gray-600">Tech</span>
            </h2>
            <p className="mb-1 text-center text-xl font-medium text-gray-600">¡Bienvenido(a)!</p>
            <span className="text-md mb-3 mt-3 text-center font-medium text-gray-800">
              Inicia sesión y optimiza tu experiencia de salud.
            </span>

            <form
              onSubmit={e => {
                e.preventDefault()
                handleLoginClick()
              }}
              className="w-full max-w-xs space-y-2"
            >
              <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={handleUserNameChange}
                className="mb-1 w-full rounded-md border border-[#1c2a3a] p-2 text-center shadow-sm focus:border-[#1c2a3a] focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
                className="mb-2 w-full rounded-md border border-[#1c2a3a] p-2 text-center shadow-sm focus:border-[#1c2a3a] focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
              />
              <div className="mt-4 flex justify-center space-x-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-[#1c2a3a] px-4 py-1.5 font-semibold text-white hover:bg-[#162328] focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
                  id="Ingresar"
                >
                  Ingresar
                </button>

                <button
                  type="button"
                  onClick={handleCreateAccountClick}
                  className="inline-flex items-center rounded-md bg-gray-500 px-4 py-1.5 font-semibold text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
                >
                  Crear cuenta
                </button>
              </div>
              {errorMessage && <p className="mt-4 text-center text-red-600">{errorMessage}</p>}
            </form>
          </div>
        </div>
      )}

      {showCreateUserModal && (
        <CreateUserModal onClose={handleCloseCreateUserModal} onSuccess={handleOpenModalRegister} />
      )}

      {showModalRegister && <ModalRegister onClose={handleCloseModalRegister} />}
    </>
  )
}

export default PrincipalModal
