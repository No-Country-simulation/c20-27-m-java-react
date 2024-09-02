import Medical from "@/assets/medical.webp"
import circle from "@/assets/circle.svg"
import shadow from "@/assets/shadow.svg"

const HeroImage = () => {
  return (
    <div className="relative mb-4">
      <figure>
        <img src={Medical} alt="" />
      </figure>
      <figure className="absolute top-0">
        <img src={circle} alt="" />
      </figure>
      <figure className="absolute bottom-[.5px] left-[90px]">
        <img src={shadow} alt="" />
      </figure>
      <div className="absolute left-[15px] top-[15%] z-10 text-[#fff]">
        <h2 className="w-[55%] text-lg font-bold">¿Buscas médicos especialistas?</h2>
        <p className="mt-2 w-[54%] text-xs">Concretá un turno con nuestros mejores médicos.</p>
      </div>
    </div>
  )
}

export default HeroImage
