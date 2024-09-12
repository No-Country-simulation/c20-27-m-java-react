import { useState, ChangeEvent,  } from "react";
import { SearchIcon } from "@/assets/icons";


interface SearchProps {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  // Manejador del cambio de búsqueda
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Ejecuta la función de búsqueda que viene como prop
  };

  return (
    <div className="relative">
      <figure className="absolute top-2 pl-4">
        <img src={SearchIcon} alt="" />
      </figure>
      <input
        type="text"
        className="h-[40px] w-full rounded-xl bg-[#f3f4f6] pl-[52px] shadow-2.5xl outline-none"
        value={query}
        onChange={handleChange}
        placeholder="Buscar doctor por especialidad..."
      />
    </div>
  );
};

export default Search;
