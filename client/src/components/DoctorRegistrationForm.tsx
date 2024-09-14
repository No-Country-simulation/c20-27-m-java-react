import React, { useState } from "react"
import Input from "@/components/RegisterEntry"
import Button from "@/components/Button"
import {
  UserIcon,
  LastNameIcon,
  MailIcon,
  TelephoneIcon,
  SpecializationIcon,
  AddressIcon,
} from "@/assets/icons"
import { useCreateDoctor } from "@/hooks/useCreateDoctor"

const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [especialidad, setEspecialidad] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [direccion, setDireccion] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [success, loading, error, setCreateDoctor] = useCreateDoctor({
    nombre,
    apellido,
    especialidad,
    email,
    telefono,
    direccion,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nombre || !apellido || !especialidad || !email || !telefono) {
      setErrorMessage("Todos los campos son requeridos.")
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setErrorMessage("El correo electrónico no es válido.")
      return
    }

    const phonePattern = /^[0-9]{10}$/
    if (!phonePattern.test(telefono)) {
      setErrorMessage("El número telefónico debe tener 10 dígitos.")
      return
    }

    setErrorMessage("")

    // Llamada al hook useCreateDoctor para crear el doctor
    await setCreateDoctor()

    if (success) {
      // Limpia los campos del formulario
      setNombre("")
      setApellido("")
      setEspecialidad("")
      setEmail("")
      setTelefono("")
      setDireccion("")
      setSuccessMessage("Doctor creado exitosamente")
    } else if (error) {
      setSuccessMessage("")
    }
  }

  return (
    <div>
      <form className="mb-3 mt-5 flex w-full max-w-xs flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          iconSrc={UserIcon}
          placeholder="Tu nombre"
          type="text"
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <Input
          iconSrc={LastNameIcon}
          placeholder="Tu apellido"
          type="text"
          id="apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
        />
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src={SpecializationIcon}
              alt="Specialization Icon"
              className="h-5 w-5 text-gray-400"
            />
          </div>
          <select
            className="focus:ring-blue-500 focus:border-blue-500 w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm font-bold shadow-sm focus:outline-none focus:ring-2"
            style={{ color: "#9CA3AF" }}
            value={especialidad}
            onChange={e => setEspecialidad(e.target.value)}
          >
            <option value="" disabled>
              Especialidad
            </option>
            <option value="Oftalmología">Oftalmología</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Odontología">Odontología</option>
            {/* Agrega más opciones aquí */}
          </select>
        </div>
        <Input
          iconSrc={MailIcon}
          placeholder="Tu correo electrónico"
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          iconSrc={TelephoneIcon}
          placeholder="Tu número telefónico"
          type="text"
          id="telefono"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
        />
        <Input
          iconSrc={AddressIcon}
          placeholder="Tu dirección"
          type="text"
          id="direccion"
          value={direccion}
          onChange={e => setDireccion(e.target.value)}
        />
        <Button label={loading ? "Creando..." : "Crear Perfil"} />
      </form>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  )
}

export default Formulario
