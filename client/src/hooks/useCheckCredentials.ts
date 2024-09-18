import { useState } from "react";
import axios from "axios";

const useCheckCredentials = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentialsValid, setCredentialsValid] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkCredentials = async (userName: string, password: string) => {
    setIsLoading(true);
    setError(null);
    setCredentialsValid(false);
    try {
      const response = await axios.post('https://c20-27-m-java-react-production-b1fb.up.railway.app/users/login', {
        userName,
        password
      });

      console.log("Response data:", response.data); // Verifica la respuesta del servidor

      if (response.status === 200) {
        // Suponiendo que el servidor devuelve un objeto o booleano
        setCredentialsValid(true); // Si la solicitud fue exitosa, consideramos las credenciales válidas
      } else {
        setCredentialsValid(false);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.error("Response error:", err.response.data);
        setError(`Error: ${err.response.data.message || "Hubo un error al verificar las credenciales."}`);
      } else {
        setError("Hubo un error al verificar las credenciales.");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, credentialsValid, error, checkCredentials };
};

export default useCheckCredentials;

