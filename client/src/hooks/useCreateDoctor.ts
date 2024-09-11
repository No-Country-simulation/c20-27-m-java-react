import { useState } from "react";
import axios from "axios";

export const useCreateDoctor = (doctor: {
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
  telefono: string;
  direccion: string;
}) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createDoctor = async () => {
    try {
      setLoading(true);
      setError(null);

      await axios.post("https://c20-27-m-java-react-production.up.railway.app/doctors/createDoctor", doctor)

      setSuccess(true);
    } catch (err) {
      setError(new Error(`Failed to create doctor: ${(err as Error).message}`));
    } finally {
      setLoading(false);
    }
  };

  return [success, loading, error, createDoctor] as const;
};


