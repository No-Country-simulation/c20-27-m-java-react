import { useState } from "react";
import PatientRegistrationForm from "@/components/PatientRegistrationForm";
import DoctorRegistrationForm from "@/components/DoctorRegistrationForm";

interface ModalRegisterProps {
  onClose: () => void;
}

const ModalRegister = ({ }: ModalRegisterProps) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 items-center ">
      {!selectedRole ? (
        <>
          <span className="text-sm text-gray-700 font-medium">Selecciona tu rol:</span>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <input
                type="radio"
                name="role"
                value="paciente"
                id="paciente"
                className="h-4 w-4"
                onChange={handleRoleChange}
              />
              <span>Paciente</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <input
                type="radio"
                name="role"
                value="medico"
                id="medico"
                className="h-4 w-4"
                onChange={handleRoleChange}
              />
              <span>Médico</span>
            </label>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          {selectedRole === "paciente" && <PatientRegistrationForm />}
          {selectedRole === "medico" && <DoctorRegistrationForm />}
        </div>
      )}
    </div>
  );
};

export default ModalRegister;

