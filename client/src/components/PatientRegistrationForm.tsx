import Input from "@/components/RegisterEntry";
import Button from "@/components/Button";
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons"


const Formulario = () => {
  return (
    <div>
    <h2 className="mb-3 text-center text-sm font-bold text-gray-800">Crea tu cuenta</h2>
    <p className="text-center text-xs font-semibold text-gray-500">Estamos para ayudarte</p>
    <form className="mt-5 flex w-full max-w-xs flex-col gap-4">
      <Input iconSrc={UserIcon} placeholder="Tu nombre" type="text" id="id_paciente" />
      <Input iconSrc={LastNameIcon} placeholder="Tu apellido" type="text" id="apellido" />
      <Input iconSrc={MailIcon} placeholder="Tu correo electrónico" type="email" id="email" />
      <Input iconSrc={TelephoneIcon} placeholder="Tu número telefónico" type="text" id="telefono" />
      <Input iconSrc={AddressIcon} placeholder="Tu dirección" type="text" id="direccion" />
      <Button label="Crear Perfil" />
    </form>
    </div>
  )
}

export default Formulario

