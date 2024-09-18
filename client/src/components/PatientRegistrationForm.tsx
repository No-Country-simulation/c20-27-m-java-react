import React, { useState, useEffect } from "react"
import { useCreatePatient } from "@/hooks/useCreatePatient"
import Input from "@/components/RegisterEntry"
import Button from "@/components/Button"
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons"

const PatientRegistrationForm: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [address, setAddress] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch(
          "https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/all",
        ) // Cambia esta URL según tu implementación
        console.log(response)

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const contentType = response.headers.get("Content-Type")

        if (contentType?.includes("application/json")) {
          const data = await response.json()
          // Asegúrate de que `userId` está en el formato correcto
          if (data && typeof data.userId === "string") {
            setUserId(data.userId)
            localStorage.setItem("userId", data.userId) // Guarda el userId en localStorage
          } else {
            throw new Error("userId no encontrado en la respuesta JSON.")
          }
        } else {
          // Si el tipo de contenido no es JSON, muestra un mensaje de error
          const text = await response.text()
          console.error("Respuesta no JSON:", text)
          setErrorMessage("Error al procesar la respuesta del servidor. Respuesta no JSON.")
        }
      } catch (error) {
        console.error("Error al obtener el userId:", error)
        setErrorMessage(
          `Error al obtener el identificador del usuario: ${isError(error) ? error.message : "Error desconocido"}`,
        )
      }
    }

    fetchUserId()
  }, [])

  const { createPatient, error, loading, success } = useCreatePatient(
    {
      name,
      lastName,
      email,
      telephone,
      address,
    },
    userId,
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !lastName || !email || !telephone || !address) {
      setErrorMessage("Todos los campos son requeridos.")
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setErrorMessage("El correo electrónico no es válido.")
      return
    }

    if (!userId) {
      setErrorMessage("No se pudo obtener el identificador del usuario.")
      return
    }

    setErrorMessage("")
    await createPatient()

    if (success) {
      setName("")
      setLastName("")
      setEmail("")
      setTelephone("")
      setAddress("")
      setSuccessMessage("Paciente creado exitosamente")
    } else if (error) {
      setSuccessMessage("")
      setErrorMessage(isError(error) ? error.message : "Error inesperado al crear paciente")
    }
  }

  function isError(error: unknown): error is Error {
    return (error as Error).message !== undefined
  }

  return (
    <div className="mx-auto max-w-md p-4">
      <form className="mb-3 mt-5 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          iconSrc={UserIcon}
          placeholder="Nombre"
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          iconSrc={LastNameIcon}
          placeholder="Apellido"
          type="text"
          id="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <Input
          iconSrc={MailIcon}
          placeholder="Correo electrónico"
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          iconSrc={TelephoneIcon}
          placeholder="Número telefónico"
          type="text"
          id="telephone"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />
        <Input
          iconSrc={AddressIcon}
          placeholder="Dirección"
          type="text"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <div className="mb-4 flex justify-center">
          <Button
            label={loading ? "Creando..." : "Crear Paciente"}
            className="w-full max-w-xs"
            type="submit"
          />
        </div>
      </form>

      {errorMessage && <p className="mt-3 text-center font-bold text-red-500">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mt-3 text-center font-bold">{successMessage}</p>
      )}
    </div>
  )
}

export default PatientRegistrationForm
