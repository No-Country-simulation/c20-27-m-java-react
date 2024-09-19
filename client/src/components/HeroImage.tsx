import { Link } from "react-router-dom"
import Doctor from "@/assets/doctor.jpg"
import circle from "@/assets/circle.svg"
import shadow from "@/assets/shadow.svg"

const HeroImage = () => {
  return (
    <article className="relative mb-2">
      <Link to="/all-doctors">
        <figure>
          <img src={Doctor} alt="" />
        </figure>
        <figure className="absolute top-0">
          <img src={circle} alt="" />
        </figure>
        <figure className="absolute bottom-[.5px] left-[90px]">
          <img src={shadow} alt="" />
        </figure>
        <div className="absolute left-[15px] top-[15%] z-10 text-[#fff]">
          <h2 className="w-[55%] text-lg font-bold">¿Buscas médicos especialistas?</h2>
          <p className="mt-2 w-[54%] text-xs">Concreta un turno con nuestros mejores médicos.</p>
        </div>
      </Link>
    </article>
  )
}

export default HeroImage
