import { Link } from "react-router-dom";
import Doctor from "@/assets/doctor.jpg";
import circle from "@/assets/circle.svg";
import shadow from "@/assets/shadow.svg";

const HeroImage = () => {
  return (
    <article className="relative mb-2">
      <Link to="/all-doctors">
        <figure>
          <img 
            src={Doctor} 
            alt="" 
            className="w-full h-auto max-h-[300px]" // Ajuste de tamaño: max-h define la altura máxima
          />
        </figure>
        <figure className="absolute top-0">
          <img 
            src={circle} 
            alt="" 
            className="w-full h-auto max-h-[150px]" // Ajuste del círculo
          />
        </figure>
        <figure className="absolute bottom-[.5px] left-[90px]">
          <img 
            src={shadow} 
            alt="" 
            className="w-full h-auto max-h-[80px]" // Ajuste de la sombra
          />
        </figure>
        <div className="absolute -right-[50px] top-[15%] z-10 text-blue-100">
  <h2 className="w-[55%] text-lg font-bold">¿Buscas médicos especialistas?</h2>
  <p className="mt-2 w-[54%] text-xs">Concreta un turno con nuestros mejores médicos.</p>
</div>

      </Link>
    </article>
  );
};

export default HeroImage;

