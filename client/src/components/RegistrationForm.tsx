import Input from "@/components/RegisterEntry"
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons"

const Formulario = () => {
  return (
    <form className="mt-5 flex w-full max-w-xs flex-col gap-4">
      <Input iconSrc={UserIcon} placeholder="Tu nombre" type="text" id="nombre" />
      <Input iconSrc={LastNameIcon} placeholder="Tu apellido" type="text" id="apellido" />
      <Input iconSrc={MailIcon} placeholder="Tu correo electrónico" type="email" id="email" />
      <Input iconSrc={TelephoneIcon} placeholder="Tu número telefónico" type="text" id="telefono" />
      <Input iconSrc={AddressIcon} placeholder="Tu dirección" type="text" id="direccion" />
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-700 font-medium">Selecciona tu rol:</span>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <input type="radio" name="role" value="paciente" id="paciente" className="h-4 w-4" />
            <span>Paciente</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <input type="radio" name="role" value="medico" id="medico" className="h-4 w-4" />
            <span>Médico</span>
          </label>
        </div>
      </div>
    </form>
  )
}

export default Formulario

