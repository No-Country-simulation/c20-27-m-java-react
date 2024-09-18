import React, { useState } from "react"
import useCreateUser from "../hooks/useCreateUser"

interface CreateUserModalProps {
  onClose: () => void
  onSuccess: () => void
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onClose, onSuccess }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { createUser } = useCreateUser()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!username || !password) {
      alert("Por favor, complete todos los campos")
      return
    }

    try {
      await createUser(username, password)
      if (!error) {
        onSuccess()
        onClose()
      } else {
        alert("error")
      }
    } catch (err) {
      console.error("Error al crear el usuario:", err)
      setError("Error al crear el usuario. Inténtalo de nuevo más tarde.")
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
      <div className="relative w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
        <h2 className="mb-4 text-xl text-gray-800">Crear Usuario</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mb-2 w-full rounded-md border border-gray-300 p-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-2 w-full rounded-md border border-gray-300 p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-md px-4 py-2 text-black"
            disabled={isLoading}
          >
            {isLoading ? "Creando..." : "Enviar"}
          </button>
          {error && <p className="mt-2 text-red-500">{error}</p>}
          <button type="button" onClick={onClose} className="ml-2 text-gray-500 hover:underline">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateUserModal
