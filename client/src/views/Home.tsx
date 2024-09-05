// import Header from "@/components/Header"
import Categories from "../components/Categories"
import SearchInput from "../components/SearchInput"
import HeroImage from "../components/HeroImage"
import Footer from "../components/Footer"
import GeoIndicator from "../components/GeoIndicator"
import NotificationBell from "../components/NotificationBell"
import React from "react"

const Home = () => {
  return (
    <>
      <main className="mt-4">
        <section>
          <div className="flex items-center justify-between">
            <GeoIndicator />
            <NotificationBell />
          </div>
          <SearchInput />
          <HeroImage />
          <Categories />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
