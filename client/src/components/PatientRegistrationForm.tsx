import React, { useState } from "react";
import Input from "@/components/RegisterEntry";
import Button from "@/components/Button";
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons";
import { useCreatePatient } from "@/hooks/useCreatePatient";

const PatientRegistrationForm: React.FC = () => {
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { createPatient, error, loading } = useCreatePatient();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !lastName || !email || !telephone || !address) {
      setErrorMessage("Todos los campos son requeridos.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("El correo electrónico no es válido.");
      return;
    }

    setErrorMessage("");
    
    try {
      await createPatient({ name, lastName, email, telephone, address });
      alert("Paciente creado exitosamente");
      setName("");
      setLastName("");
      setEmail("");
      setTelephone("");
      setAddress("");
    } catch (err) {
      setErrorMessage("Error al crear el paciente.");
    }
  };

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

        <div className="mb-2 flex justify-center">
          <Button
            label={loading ? "Creando..." : "Crear Paciente"}
            className="w-full max-w-xs"
            type="submit"
          />
        </div>
      </form>

      {errorMessage && <p className="mt-1 text-center font-bold text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default PatientRegistrationForm;
