import Navbar from "@/components/NavBar";
import FooterPrincipal from "@/views/PrincipalFooter";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800">
      <div className="flex flex-col">
        <Navbar />
        <FooterPrincipal />
      </div>
    </footer>
  );
};

export default Footer;
