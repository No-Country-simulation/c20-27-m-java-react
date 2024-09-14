import { useState } from "react";
import { ArrowIcon } from "@/assets/icons";
import SearchInput from "@/components/SearchInput";
import DoctorsList from "@/components/DoctorsList";
import { Link } from "react-router-dom";
import Header from "./Header";
import NotificationBell from "@/components/NotificationBell";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <div className="relative min-h-screen">
      <Link to="/home" className="absolute top-4 left-4 flex items-center">
        <figure className="w-8 h-8">
          <img src={ArrowIcon} alt="Volver a inicio" className="w-full h-full" />
        </figure>
      </Link>
      <Header />
      <div className="absolute top-4 right-4 flex items-center">
        <NotificationBell />
      </div>

      <main className="pt-16 pb-16"> {/* Ajusta el padding-top y padding-bottom según sea necesario */}
        <section className="p-4">
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
      <Footer />
    </div>
  );
};

export default AllDoctors;

