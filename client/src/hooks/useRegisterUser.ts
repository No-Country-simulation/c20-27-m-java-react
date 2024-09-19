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
       //'https://c20-27-m-java-react-production-b1fb.up.railway.app/users/create',
      const response = await axios.post(
        //'http://localhost:8080/users/create',
       'https://c20-27-m-java-react-production-b1fb.up.railway.app/users/create',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) {
        console.log("Usuario creado correctamente.");
        const userResponse = await axios.get('https://c20-27-m-java-react-production-b1fb.up.railway.app/users');
        const users = userResponse.data;
        const createdUser = users.find((user: any) => user.userName === payload.userName);

        if (createdUser && createdUser.userId) {
          // Almacenar el userId en localStorage
          localStorage.setItem('userId', createdUser.userId.toString());
          console.log("userId guardado:", createdUser.userId);
          setSuccess(true);
        } else {
          setError('No se pudo encontrar el usuario recién creado.');
        }
      } else {
        setError('Error inesperado: ' + response);
      }

    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Error en la solicitud');
        console.error('Error en la solicitud:', err.response);
      } else {
        setError('Error desconocido');
        console.error('Error desconocido:', err);
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