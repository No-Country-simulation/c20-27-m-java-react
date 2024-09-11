import Input from "@/components/RegisterEntry";
import Button from "@/components/Button";
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, SpecializationIcon } from "@/assets/icons";

const Formulario = () => {
  return (
    <div>
      <h2 className="mb-3 text-center text-sm font-bold text-gray-800">Crea tu cuenta</h2>
      <p className="text-center text-xs font-semibold text-gray-500">Estamos para ayudarte</p>

      <form className="mt-5 flex w-full max-w-xs flex-col gap-4 mb-3">
        <Input iconSrc={UserIcon} placeholder="Tu nombre" type="text" id="nombre" />
        <Input iconSrc={LastNameIcon} placeholder="Tu apellido" type="text" id="apellido" />
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={SpecializationIcon} alt="Specialization Icon" className="h-5 w-5 text-gray-400" />
          </div>
          <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" style={{ color: '#9CA3AF' }}>
            <option value="" disabled selected style={{ color: '#9CA3AF' }}>Especialidad</option>
            <option value="M" style={{ color: '#9CA3AF' }}>All</option>
          </select>
        </div>
        <Input iconSrc={MailIcon} placeholder="Tu correo electrónico" type="email" id="email" />
        <Input iconSrc={TelephoneIcon} placeholder="Tu número telefónico" type="text" id="telefono" />
        <Button label="Crear Perfil" />
      </form>
    </div>
  );
};

export default Formulario;






