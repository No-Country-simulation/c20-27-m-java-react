import { useState, ChangeEvent, useEffect } from "react";
import { SearchIcon } from "@/assets/icons";
import Modal from "@/components/Modal";
import { useFetchDoctor } from "@/hooks/useFetchDoctor"; // Asegúrate de importar el hook

interface ExtendedFormEvent extends ChangeEvent<HTMLInputElement> {}

interface SearchInputProps {
  onSearch: (lastname: string) => void; // Definir el prop correctamente
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [apellido, setApellido] = useState<string>("");
  const [idDoctor, setIdDoctor] = useState<number>(0);
  const [data, loading, error] = useFetchDoctor(idDoctor); // Asegúrate de definir este hook
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleInputChange = (e: ExtendedFormEvent) => {
    const value = e.target.value;
    setApellido(value);
    setShowModal(true);
    onSearch(value); // Llamar a onSearch con el apellido
  };

  useEffect(() => {
    const fetchDoctorId = async () => {
      if (apellido.trim() === "") {
        setIdDoctor(0);
        return;
      }

      try {
        const response = await fetch(
          `https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors/findby/${apellido}`
        );
        if (!response.ok) {
          throw new Error("No se pudo encontrar el doctor");
        }
        const doctor = await response.json();
        setIdDoctor(doctor.idMedico);
      } catch (err) {
        console.error(err);
        setIdDoctor(0);
      }
    };

    fetchDoctorId();
  }, [apellido]);

  return (
    <div className="relative mb-2">
      <figure className="absolute top-2 pl-4">
        <img src={SearchIcon} alt="Search Icon" />
      </figure>
      <input
        type="text"
        placeholder="Buscando doctor por apellido..."
        className="mb-2 h-[40px] w-full rounded-xl bg-[#f3f4f6] pl-[52px] outline-none"
        value={apellido}
        onChange={handleInputChange}
      />
      {loading && <p className="text-gray-500">Cargando...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data.length > 0 &&
        showModal &&
        data.map(doctor => <Modal key={doctor.idMedico} doctor={doctor} />)}
    </div>
  );
};

export default SearchInput;
