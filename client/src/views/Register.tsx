import { useNavigate } from "react-router-dom";
import logoAzul from "@/assets/logoAzul.png";
import { ArrowIcon } from "@/assets/icons";
import ModalRegister from "@/components/ModalRegister";

const Register = () => {
  const navigate = useNavigate();

  const closePage = () => {
    navigate("/home");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40"></div>

      {/* Modal Content */}
      <div className="relative flex flex-col items-center bg-white p-8 rounded-lg shadow-lg z-50 max-w-4xl max-h-[90vh] overflow-y-auto">
        <button onClick={closePage} className="absolute top-4 left-4 p-2 text-gray-500 hover:text-gray-700">
          <img src={ArrowIcon} alt="Close" className="h-7 w-7" />
        </button>
        <img src={logoAzul} alt="Logo" className="mx-auto block h-10 max-w-full mt-30 mb-3" />
        <h1 className="mb-4 text-center text-xl font-semibold text-gray-800">
          <span className="text-gray-600">Health</span> <span className="text-gray-800">Tech</span>
        </h1>
        <ModalRegister onClose={closePage} />
      </div>
    </div>
  );
};

export default Register;

