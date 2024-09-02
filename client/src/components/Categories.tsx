import {
  DentistryIcon,
  CardiologyIcon,
  PulmonologyIcon,
  GeneralIcon,
  NeurologyIcon,
  GastroenterologyIcon,
  LaboratoryIcon,
  VaccinationIcon,
} from "@/assets/icons"
import { Link, NavLink } from "react-router-dom"

interface HealtSpecialty {
  label: string
  icon: string
  href: string
  backgroundColor: string
}

const healthSpecialties: HealtSpecialty[] = [
  {
    label: "Dentistry",
    icon: DentistryIcon,
    href: "/all-categories/dentistry",
    backgroundColor: "#DC9497",
  },
  {
    label: "Cardiolo..",
    icon: CardiologyIcon,
    href: "/all-categories/cardiology",
    backgroundColor: "#93C19E",
  },
  {
    label: "Pulmono..",
    icon: PulmonologyIcon,
    href: "/all-categories/pulmonology",
    backgroundColor: "#F5AD7E",
  },
  {
    label: "General",
    icon: GeneralIcon,
    href: "/all-categories/general",
    backgroundColor: "#ACA1CD",
  },
  {
    label: "Neurology",
    icon: NeurologyIcon,
    href: "/all-categories/neurology",
    backgroundColor: "#4D9B91",
  },
  {
    label: "Gastroen..",
    icon: GastroenterologyIcon,
    href: "/all-categories/gastroenterology",
    backgroundColor: "#352261",
  },
  {
    label: "Laborato..",
    icon: LaboratoryIcon,
    href: "/all-categories/laboratory",
    backgroundColor: "#DEB6B5",
  },
  {
    label: "Vaccinat..",
    icon: VaccinationIcon,
    href: "/all-categories/vaccination",
    backgroundColor: "#89CCDB",
  },
]

const Categories = () => {
  return (
    <div className="mb-24">
      <div className="flex justify-between">
        <h2 className="mb-2 text-base font-bold text-[#1C2A3A]">Categories</h2>
        <Link to="/all-categories" className="text-sm font-medium text-[#6B7280]">
          See All
        </Link>
      </div>

      <div className="flex flex-wrap gap-x-[2.8rem] gap-y-4">
        {healthSpecialties.map(({ href, icon, label, backgroundColor }) => (
          <div key={label}>
            <NavLink
              to={href}
              className="flex size-[62px] flex-col items-center justify-center rounded-[10px]"
              style={{ backgroundColor: backgroundColor }}
            >
              <figure>
                <img src={icon} alt={label} />
              </figure>
            </NavLink>
            <p className="mt-[2px] text-center text-[12px] font-bold text-[#4B5563]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
