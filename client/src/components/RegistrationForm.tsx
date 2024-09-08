import Input from "@/components/RegisterEntry"
import { UserIcon, LastNameIcon, MailIcon, TelephoneIcon, AddressIcon } from "@/assets/icons"

const Formulario = () => {
  return (
    <form className="mt-5 flex w-full max-w-xs flex-col gap-4">
      <Input iconSrc={UserIcon} placeholder="Your Name" type="text" id="nombre" />
      <Input iconSrc={LastNameIcon} placeholder="Your Lastname" type="text" id="apellido" />
      <Input iconSrc={MailIcon} placeholder="Your Email" type="email" id="email" />
      <Input iconSrc={TelephoneIcon} placeholder="Your Phone Number" type="text" id="telefono" />
      <Input iconSrc={AddressIcon} placeholder="Your Address" type="text" id="direccion" />
    </form>
  )
}

export default Formulario
