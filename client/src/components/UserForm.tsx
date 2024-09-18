import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRegisterUser from "@/hooks/useRegisterUser"; // Actualiza la ruta si es necesario
import logoAzul from "@/assets/logoAzul.png";

const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { loading, success, error, registerUser } = useRegisterUser();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (success) {
      alert("Usuario creado");
      setShowModal(false);
      navigate("/login");
    }
  }, [success, navigate]);

  const handleRegisterClick = async () => {
    if (userName.trim() === "" || password.trim() === "") {
      alert("Por favor, ingresa un nombre de usuario y una contraseña.");
      return;
    }

    await registerUser({ userName, password });
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-75"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-sm p-4 bg-white rounded-lg shadow-lg flex flex-col items-center z-60 mb-5">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" />
          </div>
        )}

        {!loading && (
          <>
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
              Crea un usuario y optimiza tu experiencia de salud.
            </span>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegisterClick();
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
                >
                  Crear
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center px-4 py-1.5 bg-[#1c2a3ad2] text-white rounded-md font-semibold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1c2a3a]"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UserForm;




