import { FC } from "react";
import useSpecialties from "@/hooks/useSpecialties";

interface NavigationProps {
  onSpecialtyChange: (specialty: string) => void;
  selectedSpecialty: string; // Nueva prop para la especialidad seleccionada
}

const Navigation: FC<NavigationProps> = ({ onSpecialtyChange, selectedSpecialty }) => {
  const { specialties, error } = useSpecialties();

  return (
    <nav className="mx-auto mb-4 mt-6 max-w-full overflow-x-auto rounded-lg px-6 py-4">
      {error && <p className="text-red-500 mb-4 text-center">Error: {error}</p>}
      <ul className="m-0 flex list-none flex-wrap justify-center gap-4 p-0">
        <li
          role="button"
          aria-label="All specialties"
          className={`cursor-pointer rounded-full border-2 px-4 py-2 text-center text-base font-semibold transition-colors duration-300 ease-in-out ${
            selectedSpecialty === "Todas" ? "border-black bg-gray-800 text-white" : "border-black bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white"
          }`}
          onClick={() => onSpecialtyChange("Todas")}
        >
          Todas
        </li>
        {specialties.map((especialidad) => (
          <li
            key={especialidad}
            role="button"
            aria-label={`Specialty: ${especialidad}`}
            className={`cursor-pointer rounded-full border-2 px-4 py-2 text-center text-base font-semibold transition-colors duration-300 ease-in-out ${
              selectedSpecialty === especialidad ? "border-black bg-gray-800 text-white" : "border-black bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white"
            }`}
            onClick={() => onSpecialtyChange(especialidad)}
          >
            {especialidad}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

