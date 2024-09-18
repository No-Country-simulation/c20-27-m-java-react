import axios from 'axios';
import { useState } from 'react';

interface PatientData {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  address: string;
}

export const useCreatePatient = (patientData: PatientData, userId: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createPatient = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const url = `https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/create/${userId}`;
      console.log("Sending request to URL:", url); // Verifica la URL en la consola
      console.log("Request body:", patientData); // Verifica los datos enviados

      const response = await axios.post(url, patientData);

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError("Hubo un problema al crear el perfil del paciente.");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as axios.AxiosError;
        setError(axiosError.response?.data?.error || "Error al crear el perfil del paciente.");
        console.error("Error de Axios:", axiosError.response);
        console.error("Error de Axios detalles:", axiosError.message);
        console.error("Error de Axios código:", axiosError.code);
      } else {
        setError("Error de red al crear el perfil del paciente.");
        console.error("Error desconocido:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return [success, loading, error, createPatient] as const;
};
