import { useState } from 'react';
import axios from 'axios';

interface RegisterUserPayload {
  userName: string;
  password: string;
}

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (payload: RegisterUserPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        'https://c20-27-m-java-react-production-b1fb.up.railway.app/users/create',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) { // Código de estado para éxito
        setSuccess(true);
      } else {
        setError('Error inesperado: ' + response.statusText);
      }
    } catch (err) {
      // Verificar si el error es una instancia de Error
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Error en la solicitud');
      } else {
        setError('Error desconocido');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    registerUser,
    loading,
    error,
    success,
  };
};

export default useRegisterUser;

