import React, { useState } from "react";
import Input from "@/components/RegisterEntry";
import Button from "@/components/Button";
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons";
import { useCreatePatient } from "@/hooks/useCreatePatient";

const PatientRegistrationForm: React.FC = () => {
  
  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { createPatient, error, loading, success } = useCreatePatient();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(
      !name ||
      !lastName ||
     !email ||
     !telephone ||
     !address
    )
    {
      setErrorMessage("Todos los campos son requeridos.");
      return;
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(
      !emailPattern.test(email)) {
        setErrorMessage("El correo electrónico no es válido.");
        return;
      }

    // Llamar a la función registerPatient pasando los datos del paciente y el username
    setErrorMessage("")
    await createPatient({name, lastName, email, telephone, address});
    if(success){
      setName("");
      setLastName("");
      setEmail("");
      setTelephone("");
      setAddress("");
      setSuccessMessage("Paciente creado exitosamente");
    }
    else if (error) {
      setSuccessMessage(""),
      setErrorMessage("")
    }
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <form className="mb-3 mt-5 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        {/* Campo para Nombre de Usuario */}
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

        {/* Botón para Enviar */}
        <div className="mb-4 flex justify-center">
          <Button
            label={loading ? "Creando..." : "Crear Paciente"}
            className="w-full max-w-xs"
            type="submit"
          />
        </div>
      </form>

      {/* Mensajes de error o éxito */}
      {errorMessage && <p className="mt-3 text-center font-bold text-red-500">{errorMessage}</p>}
      {successMessage && <p className="mt-3 text-center font-bold text-green-500">{successMessage}</p>}
    </div>
  );
};

export default PatientRegistrationForm;

