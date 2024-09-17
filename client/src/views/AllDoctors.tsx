import { useState } from "react";
import { ArrowIcon } from "@/assets/icons";
import SearchInput from "@/components/SearchInput";
import DoctorsList from "@/components/DoctorsList";
import { Link } from "react-router-dom";
import Header from "./Header";
import NotificationBell from "@/components/NotificationBell";
import Navigation from "@/components/Navigation";
import FooterPrincipal from "@/components/PrincipalFooter";

const AllDoctors = () => {
  const [selectedLastName, setSelectedLastName] = useState<string>("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");

  const handleLastNameChange = (lastname: string) => {
    setSelectedLastName(lastname);
  };

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Link to="/home" className="absolute top-4 left-4 flex items-center">
        <figure className="w-8 h-8">
          <img src={ArrowIcon} alt="Volver a inicio" className="w-full h-full" />
        </figure>
      </Link>
      <Header />
      <div className="absolute top-4 right-4 flex items-center">
        <NotificationBell />
      </div>

      <main className="flex-grow pb-1"> 
        <section className="p-1">
          <div className="flex justify-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Lista de doctores</h2>
          </div>
          <SearchInput onSearch={handleLastNameChange} />
          <Navigation onSpecialtyChange={handleSpecialtyChange} />
          <DoctorsList 
            selectedLastName={selectedLastName} 
            selectedSpecialty={selectedSpecialty} 
          />
        </section>
      </main>
      <footer className="w-full absolute bottom-0 left-0 bg-gray-800 text-white">
        <FooterPrincipal />
      </footer>
    </div>
  );
};

export default AllDoctors;
