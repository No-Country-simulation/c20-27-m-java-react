import { useNavigate } from "react-router-dom";
import RegisterBackground from "@/components/RegisterBackground";
import PatientRegistrationForm from "@/components/PatientRegistrationForm";
import DoctorRegistrationForm from "@/components/DoctorRegistrationForm";
import logoAzul from "@/assets/logoAzul.png";
import { CloseIcon } from "@/assets/icons";

interface RegisterProps {
  formType: "patient" | "doctor";
}

const Register = ({ formType }: RegisterProps) => {
  const navigate = useNavigate();

  const closePage = () => {
    navigate("/home");
  };

  return (
      <div className="relative flex flex-col items-center rounded-lg bg-white p-4 max-w-md mx-auto mt-10">
        <button onClick={closePage} className="absolute right-4 top-4 p-2">
          <img src={CloseIcon} alt="Close" className="h-6 w-6" />
        </button>
        <img src={logoAzul} alt="Logo" className="mx-auto block h-auto max-w-full mt-3 mb-3" />
        <h1 className="mb-1 text-center text-lg font-semibold text-gray-800">
          <span className="text-gray-600">Health</span> <span className="text-gray-800">Tech</span>
        </h1>
        <h2 className="mb-3 text-center text-sm font-bold text-gray-800">Crea tu cuenta</h2>
        <p className="text-center text-xs font-semibold text-gray-500">Estamos para ayudarte</p>
        {formType === "patient" && <PatientRegistrationForm />}
        {formType === "doctor" && <DoctorRegistrationForm />}
      </div>
  );
};

export default Register;


