import { useState, useEffect } from "react";

const useSpecialties = () => {
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await fetch(`https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors`);
        if (!response.ok) {
          throw new Error("Error fetching doctors");
        }
        const data: { especialidad: string }[] = await response.json();
        
        
        const uniqueSpecialties = Array.from(new Set(data.map((doctor) => doctor.especialidad)));
        setSpecialties(uniqueSpecialties);
        setError(null);
      } catch (error) {
        setError("Error fetching specialties");
        console.error("Error fetching specialties:", error);
      }
    };

    fetchSpecialties();
  }, []);

  return { specialties, error };
};

export default useSpecialties;
