import logoAzul from "@/assets/logoAzul.png";

const Header = () => {
  return (
    <header className="w-full bg-gray-100 mt-3">
      <div className="flex flex-col items-center justify-center bg-white p-2 md:p-3">
        <img
          src={logoAzul}
          alt="Logo"
          className="mb-1 h-8 md:h-10 max-w-full" // Tamaño reducido
        />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800"> {/* Texto más pequeño */}
          Health<span className="text-gray-600">Tech</span>
        </h2>
        <div className="flex space-x-4 mt-1 md:mt-2">
          {/* Puedes agregar otros elementos aquí */}
        </div>
      </div>
    </header>
  );
};

export default Header;

