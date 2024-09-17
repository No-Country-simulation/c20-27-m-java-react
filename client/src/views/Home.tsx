// src/pages/Home.tsx
import HeaderPrincipal from "@/components/Header";
import Categories from "@/components/Categories";
import SearchInput from "@/components/SearchInput";
import HeroImage from "@/components/HeroImage";
import Footer from "@/components/Footer";

const Home = () => {
 
  const handleSearch = (lastname: string) => {
    console.log("Buscando doctor con apellido:", lastname);
    
  };

  return (
    <>      <main className="pt-1"> 
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


