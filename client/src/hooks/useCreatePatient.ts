import { useState, useEffect } from 'react';
import axios from 'axios';

interface Patient {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  address: string;
}

export const useCreatePatient = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Usamos useEffect para cargar el userId desde localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      console.log("UserId cargado desde localStorage:", storedUserId);
    } else {
      console.error("No se encontró el userId en localStorage");
    }
  }, []); // Solo se ejecuta una vez al cargar el componente

  const createPatient = async (patient: Patient) => {
    // Verificar si el userId existe
    console.log("----------------->" , userId)
    if (!userId) {
      setError("Usuario no encontrado. Intenta crear el usuario nuevamente.");
      return;
    }

    // Validar los campos del paciente
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

      console.log("Respuesta de la creación del paciente:", response.data);

      if (response.status === 200) {
        // Paciente creado exitosamente
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