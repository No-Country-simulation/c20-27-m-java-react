import { useState } from 'react';
import axios from 'axios';

interface Patient {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  address: string;
}

export const useCreatePatient = (patient: Patient, userId: string | null) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("este ",userId);
  console.log((localStorage.getItem("userId")));
  
  

  const createPatient = async () => {
    if (!userId) {
      setError("Usuario no encontrado");
      return;
    }
    if (!patient.name || !patient.lastName || !patient.email || !patient.telephone || !patient.address) {
      setError("Todos los campos son requeridos.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        `https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/create/${userId}`,
        patient,
        {
          headers: {
            "Content-Type": "application/json",
          },
          
        }
         
      );
      const result = response.data;
      console.log(result);
      if (response) {
        // Aquí puedes verificar y procesar la respuesta JSON si es necesario
        console.log('Paciente creado:', response);
        setSuccess(true);
      } else {
        setError("Error al crear paciente.");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al crear paciente");
      } else {
        setError("Error inesperado al crear paciente");
      }
    } finally {
      setLoading(false);
    }
  };

  return { success, loading, error, createPatient };
};