import { useState, useEffect } from "react";
import { Doctor } from "@/components/Modal";

export const useFetchDoctorsBySpecialty = (specialty: string | null) => {
  const [data, setData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!specialty) {
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
          `https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors?specialty=${encodeURIComponent(specialty)}`
        );

        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data: Doctor[] = await response.json();
        setData(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [specialty]);

  return { data, loading, error };
};
