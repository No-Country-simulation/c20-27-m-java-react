import { Link, NavLink } from "react-router-dom";
import useHealthSpecialties from "@/hooks/useHealthSpecialties"; 
import { DentistryIcon, CardiologyIcon, PulmonologyIcon, GeneralIcon, NeurologyIcon, GastroenterologyIcon, LaboratoryIcon, VaccinationIcon } from "@/assets/icons";

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

const Categories = () => {
  const { selectedSpecialty, handleSpecialtySelect } = useHealthSpecialties();

  return (
    <div className="mb-24">
      <div className="flex justify-between mb-4">
        <h2 className="text-sm font-bold text-[#1C2A3A]">Especialidades</h2>
        <Link to="/all-categories" className="text-xs font-medium text-[#6B7280]">
          Ver todas
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {healthSpecialties.map(({ href, icon, label, backgroundColor }) => (
          <div
            key={label}
            onClick={() => handleSpecialtySelect(label)}
            className="flex flex-col items-center flex-grow basis-1/5"
          >
            <NavLink
              to={href}
              className="flex items-center justify-center rounded-[8px] mb-1" 
              style={{ backgroundColor: backgroundColor, width: '50px', height: '50px' }} 
            >
              <figure>
                <img src={icon} alt={label} className="w-full h-full object-cover" />
              </figure>
            </NavLink>
            <p className="text-xs font-bold text-[#4B5563] text-center truncate w-full whitespace-nowrap overflow-hidden">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
