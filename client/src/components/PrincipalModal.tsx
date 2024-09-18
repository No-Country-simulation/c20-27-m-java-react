import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import logoAzul from "@/assets/logoAzul.png";

const PrincipalModal = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    // Verifica si los campos están vacíos
    if (userName.trim() === "" || password.trim() === "") {
      alert("Por favor, ingresa un nombre de usuario y una contraseña.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://c20-27-m-java-react-production-b1fb.up.railway.app/users/login',
        {
          userName: userName,
          password: password
        }
      );

      console.log("Respuesta del servidor:", response.data); // Revisa qué está devolviendo el servidor

      // Verificar la respuesta del backend
      if (response.status === 200 && response.data === true) {
        // Si las credenciales son válidas, redirige a /home
        setShowModal(false);
        navigate("/home");
      } else {
        // Si el código de estado es 200 pero la respuesta no es positiva
        setError("El nombre de usuario o la contraseña son incorrectos.");
        alert("El nombre de usuario o la contraseña son incorrectos.");
        setShowModal(false);
        navigate("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Manejo de errores basado en la respuesta del servidor
        const errorMessage = error.response.data.error || "Error al verificar las credenciales.";
        setError(errorMessage);
        alert(errorMessage);
        setShowModal(false);
        navigate("/login"); // Redirige al login si hay error
      } else {
        // Otros tipos de errores (por ejemplo, problemas de conexión)
        setError("Hubo un error al verificar las credenciales.");
        alert("Hubo un error al verificar las credenciales.");
        setShowModal(false);
        navigate("/login"); // Redirige al login si hay error
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterClick = () => {
  
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75"
      onClick={handleBackgroundClick}
    >
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
            type="text"
            placeholder="Nombre de usuario"
            value={userName}
            onChange={handleChangeUserName}
            className="w-full p-2 border border-[#1c2a3a] rounded-md shadow-sm focus:outline-none focus:border-[#1c2a3a] focus:ring-2 focus:ring-[#1c2a3a] mb-1 text-center"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleChangePassword}
            className="w-full p-2 border border-[#1c2a3a] rounded-md shadow-sm focus:outline-none focus:border-[#1c2a3a] focus:ring-2 focus:ring-[#1c2a3a] mb-2 text-center"
          />
          <div className="flex space-x-2 mt-4 justify-center"> 
            <button
              type="submit"
              className="inline-flex items-center px-4 py-1.5 bg-[#1c2a3a] text-white rounded-md font-semibold hover:bg-[#162328] focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
              id="Ingresar"
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Ingresar"}
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
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrincipalModal;
