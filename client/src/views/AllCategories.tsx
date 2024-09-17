import { ArrowIcon, DentistryIcon, CardiologyIcon, PulmonologyIcon, GeneralIcon, NeurologyIcon, GastroenterologyIcon, LaboratoryIcon, VaccinationIcon } from "@/assets/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import NotificationBell from "@/components/NotificationBell";
import FooterPrincipal from "@/components/PrincipalFooter";
import useSpecialties from "@/hooks/useSpecialties";

interface HealthSpecialty {
  label: string;
  icon: string;
  href: string;
  backgroundColor: string;
}

const healthSpecialties: HealthSpecialty[] = [
  { label: "Odontología", icon: DentistryIcon, href: "/all-categories/dentistry", backgroundColor: "#DC9497" },
  { label: "Cardiología", icon: CardiologyIcon, href: "/all-categories/cardiology", backgroundColor: "#93C19E" },
  { label: "Neumología", icon: PulmonologyIcon, href: "/all-categories/pulmonology", backgroundColor: "#F5AD7E" },
  { label: "General", icon: GeneralIcon, href: "/all-categories/general", backgroundColor: "#ACA1CD" },
  { label: "Neurología", icon: NeurologyIcon, href: "/all-categories/neurology", backgroundColor: "#4D9B91" },
  { label: "Gastroenterología", icon: GastroenterologyIcon, href: "/all-categories/gastroenterology", backgroundColor: "#352261" },
  { label: "Laboratorio", icon: LaboratoryIcon, href: "/all-categories/laboratory", backgroundColor: "#DEB6B5" },
  { label: "Vacunación", icon: VaccinationIcon, href: "/all-categories/vaccination", backgroundColor: "#89CCDB" },
];

const AllCategories = () => {
  const { specialties, error: specialtiesError } = useSpecialties();
  const navigate = useNavigate(); // Hook para redirección

  const handleSpecialtySelect = (label: string) => {
    navigate(`/all-doctors?specialty=${encodeURIComponent(label)}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Link to="/home" className="absolute top-4 left-4 flex items-center">
        <figure className="w-8 h-8"> {/* Tamaño más grande para el ícono de flecha */}
          <img src={ArrowIcon} alt="Volver a inicio" className="w-full h-full" />
        </figure>
      </Link>

      <Header />

      <div className="absolute top-4 right-4 flex items-center">
        <NotificationBell />
      </div>

      <main className="flex-grow pb-1">
        <section className="p-1">
          <div className="flex justify-center mb-5">
            <h2 className="text-xl font-semibold text-gray-800">Lista de especialidades</h2>
          </div>

          {/* Mensaje de error si falla la carga de especialidades */}
          {specialtiesError && <p className="text-center text-red-500">{specialtiesError}</p>}

          {/* Muestra de las especialidades con íconos más grandes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {healthSpecialties.map(({ label, icon, href, backgroundColor }) => (
              <div key={label} className="flex flex-col items-center">
                <NavLink
                  to={href}
                  onClick={() => handleSpecialtySelect(label)} // Redirige a /all-doctors con el parámetro de consulta
                  className="flex items-center justify-center rounded-[8px] mb-1"
                  style={{ backgroundColor: backgroundColor, width: '60px', height: '60px' }} // Tamaño del contenedor
                >
                  <figure className="w-10 h-10"> {/* Tamaño más grande para el ícono */}
                    <img src={icon} alt={label} className="w-full h-full object-contain" />
                  </figure>
                </NavLink>
                <p className="text-xs font-bold text-[#4B5563] text-center truncate w-full whitespace-nowrap overflow-hidden">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterPrincipal />
    </div>
  );
};

export default AllCategories;
