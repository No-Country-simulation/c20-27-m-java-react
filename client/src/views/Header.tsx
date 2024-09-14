// src/components/Header.tsx
import logoAzul from "@/assets/logoAzul.png";

const Header = () => {
  return (
    <header className="w-full bg-gray-100 mt-3" >
      <div className="flex flex-col items-center justify-center bg-white p-4 md:p-6">
        <img
          src={logoAzul}
          alt="Logo"
          className="mb-2 h-10 md:h-12 max-w-full"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Health<span className="text-gray-600">Tech</span>
        </h2>
        <div className="flex space-x-4 mt-2 md:mt-4">
        </div>
      </div>
    </header>
  );
};

export default Header;
