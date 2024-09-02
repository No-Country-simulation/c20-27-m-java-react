import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

const AllCategories = () => {
  const location = useLocation()

  const isRootPath = location.pathname === "/all-categories"

  return (
    <>
      {isRootPath && (
        <>
          <Footer />
          <p>avbdabdvhbadhb</p>
        </>
      )}
      <Outlet />
    </>
  )
}

export default AllCategories
