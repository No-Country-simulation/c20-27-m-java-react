import { useState } from "react";

interface HealtSpecialty {
  label: string;
  icon: string;
  href: string;
  backgroundColor: string;
}

const useHealthSpecialties = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const handleSpecialtySelect = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };

  return {
    selectedSpecialty,
    handleSpecialtySelect,
  };
};

export default useHealthSpecialties;
