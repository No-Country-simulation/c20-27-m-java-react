import { HomeIcon, LocationIcon, CalendarIcon, UserIcon } from "@/assets/icons"
import { NavLink } from "react-router-dom"

interface NavIcon {
  label: string
  href: string
  icon: string
}

const navLinks: NavIcon[] = [
  { label: "Home", href: "/home", icon: HomeIcon },
  { label: "Location", href: "/location", icon: LocationIcon },
  { label: "Calendar", href: "/calendar", icon: CalendarIcon },
  { label: "User", href: "/profile", icon: UserIcon },
]

const NavBar = () => {
  return (
    <nav className="z-50 flex h-16 w-full items-center justify-center bg-white">
      <ul className="flex gap-20">
        {navLinks.map(({ label, href, icon }) => (
          <li key={label}>
            <NavLink to={href}>
              <figure>
                <img src={icon} alt={`Icon of ${label}`} />
              </figure>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
