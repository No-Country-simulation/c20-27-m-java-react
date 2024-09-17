import { useState } from "react";
import axios from "axios";

interface Patient {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  address: string;
}

export const useCreatePatient = (patient: Patient, userId: string) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPatient = async () => {
    console.log("Iniciando la creación de paciente...");

    if (
      !patient.name ||
      !patient.lastName ||
      !patient.email ||
      !patient.telephone ||
      !patient.address
    ) {
      console.log("Faltan campos requeridos.");
      setError("Todos los campos son requeridos.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        //`https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/create/${userId}`,
        `http://localhost:8080/patients/create/${userId}`,
        patient,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Respuesta del servidor:", response.data);

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError(`Error: ${response.statusText}`);
      }
    } catch (err: unknown) {
      console.error("Error en la solicitud:", err);

      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Error al crear paciente");
      } else if (err instanceof Error) {
        setError(err.message || "Error inesperado al crear paciente");
      } else {
        setError("Error inesperado al crear paciente");
      }
    } finally {
      setLoading(false);
      console.log("Proceso completado.");
    }
  };

  return [success, loading, error, createPatient] as const;
};