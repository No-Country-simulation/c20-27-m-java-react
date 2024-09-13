import Logo from "@/assets/logo.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a /home después de que el componente Loading esté visible por 3 segundos
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="absolute inset-0 bg-purple">
      <div className="flex h-screen flex-col items-center justify-center gap-3">
        <figure className="size-[66px]">
          <img src={Logo} alt="Logo" />
        </figure>
        <h1 className="text-xl text-[#cbcbcb]">
          Health
          <span className="text-white">Tech</span>
        </h1>
      </div>
    </section>
  );
};

export default Loading;