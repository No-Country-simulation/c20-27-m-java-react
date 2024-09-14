import { useState, useEffect } from "react";
import { Doctor } from "@/components/Modal";

export const useFetchDoctor = (id: number) => {
  const [data, setData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (id === 0) {
      setData([]);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors/${id}`
        );

        // Manejo de error si la respuesta no es ok
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data: Doctor = await response.json();
        setData([data]);
      } catch (err) {
        console.error("Error fetching doctor:", err);
        setError(new Error((err as Error).message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return [data, loading, error] as const;
};

