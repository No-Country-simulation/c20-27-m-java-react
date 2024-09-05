
import Input from './RegisterEntry';

// Usa rutas relativas basadas en la estructura del proyecto
import userIcon from '../assets/icons/user.svg';
import lastnameIcon from '../assets/icons/lastname.svg';
import mailIcon from '../assets/icons/mail.svg';
import telephoneIcon from '../assets/icons/telephone.svg';
import addressIcon from '../assets/icons/address.svg';

const Formulario = () => {
  return (
    <form className="flex flex-col w-full max-w-xs gap-4 mt-5">
      <Input iconSrc={userIcon} placeholder="Your Name" type="text" id="nombre" />
      <Input iconSrc={lastnameIcon} placeholder="Your Lastname" type="text" id="apellido" />
      <Input iconSrc={mailIcon} placeholder="Your Email" type="email" id="email" />
      <Input iconSrc={telephoneIcon} placeholder="Your Phone Number" type="text" id="telefono" />
      <Input iconSrc={addressIcon} placeholder="Your Address" type="text" id="direccion" />
    </form>
  );
};

export default Formulario;


