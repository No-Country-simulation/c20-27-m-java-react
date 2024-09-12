import React, { useState } from "react"
import { useCreatePatient } from "@/hooks/useCreatePatient"
import Input from "@/components/RegisterEntry"
import Button from "@/components/Button"
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons" // Asegúrate de que los iconos estén correctamente importados

const PatientRegistrationForm = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [address, setAddress] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const [success, loading, error, createPatient] = useCreatePatient({
    name,
    lastName,
    email,
    telephone,
    address,
  })

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
      setErrorMessage(error)
    }
  }

  return (
    <div>
      <h2 className="mb-3 text-center text-sm font-bold text-gray-800">Registro de Paciente</h2>
      <form className="mb-3 mt-5 flex w-full max-w-xs flex-col gap-4" onSubmit={handleSubmit}>
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
        <Button label={loading ? "Creando..." : "Crear Paciente"} />
      </form>
      {errorMessage && <p className="mt-3 text-center font-bold text-red-500">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mt-3 text-center font-bold">{successMessage}</p>
      )}
    </div>
  )
}

export default PatientRegistrationForm
