// src/pages/Home.tsx
import HeaderPrincipal from "@/components/Header";
import Categories from "@/components/Categories";
import SearchInput from "@/components/SearchInput";
import HeroImage from "@/components/HeroImage";
import Footer from "@/components/Footer";

const Home = () => {
  // Define la función que manejará la búsqueda
  const handleSearch = (lastname: string) => {
    console.log("Buscando doctor con apellido:", lastname);
    // Aquí puedes manejar la lógica de búsqueda, por ejemplo, actualizar el estado o hacer una solicitud de API.
  };

  return (
    <>      <main className="pt-1"> {/* Ajusta el padding-top según la altura del encabezado */}
        <section>
        <HeaderPrincipal />
          <SearchInput onSearch={handleSearch} />
          <HeroImage />
          <Categories />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;


