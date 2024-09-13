import logoAzul from "@/assets/logoAzul.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrincipalModal = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowModal(false);
    navigate("/loading"); 
  };

  const handleRegisterClick = () => {
    setShowModal(false);
    navigate("/register"); 
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-1">
      <div className="relative w-full max-w-sm p-4 bg-white rounded-lg shadow-lg flex flex-col items-center z-60 mb-5">
        <img 
          src={logoAzul} 
          alt="Logo" 
          className="mt-4 mx-auto mb-3 h-10 max-w-full" 
        />
        <h2 className="mb-4 text-xl text-gray-800">
          Health
          <span className="text-gray-600">Tech</span>
        </h2>
        <p className="text-xl font-medium text-gray-600 mb-1 text-center">
          ¡Bienvenido(a)!
        </p>
        <span className="text-md font-medium text-gray-800 mb-3 mt-3 text-center">
          Inicia sesión y optimiza tu experiencia de salud.
        </span>
       
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginClick(); 
          }}
          className="space-y-2 w-full max-w-xs"
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-2 border border-[#1c2a3a] rounded-md shadow-sm focus:outline-none focus:border-[#1c2a3a] focus:ring-2 focus:ring-[#1c2a3a] mb-1 text-center" // Cambiado border-gray-300 a border-[#1c2a3a]
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 border border-[#1c2a3a] rounded-md shadow-sm focus:outline-none focus:border-[#1c2a3a] focus:ring-2 focus:ring-[#1c2a3a] mb-2 text-center" // Cambiado border-gray-300 a border-[#1c2a3a]
          />
          <div className="flex space-x-2 mt-4 justify-center"> 
            <button
              type="submit"
              className="inline-flex items-center px-4 py-1.5 bg-[#1c2a3a] text-white rounded-md font-semibold hover:bg-[#162328] focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
              id="Ingresar"
            >
              Ingresar
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="inline-flex items-center px-4 py-1.5 bg-[#1c2a3ad2] text-white rounded-md font-semibold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
            >
              Olvidé mi contraseña
            </button>
            <button
              type="button"
              onClick={handleRegisterClick} 
              className="inline-flex items-center px-4 py-1.5 bg-gray-500 text-white rounded-md font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrincipalModal;






