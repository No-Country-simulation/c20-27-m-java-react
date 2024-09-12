import { useState, useEffect } from "react";

interface Doctor {
    id: number;
    nombre: string;
    apellido: string;
    especialidad: string;
    email: string;
    telefono: string;
    imagen: string;
  }

const useSearchDoctors = (query: string) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (query === "") {
        setDoctors([]);
        return;
      }

      try {
        const response = await fetch(
          `https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors?name=${query}`
        );
        if (!response.ok) {
          throw new Error("Error fetching doctors");
        }
        const data: Doctor[] = await response.json();
        setDoctors(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unexpected error occurred");
        }
      }
    };

    fetchDoctors();
  }, [query]);

  return { doctors, error };
};

export default useSearchDoctors;
