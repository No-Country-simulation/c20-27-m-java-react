import { useParams } from "react-router-dom"
import Footer from "@/components/Footer"

const DoctorProfile = () => {
  const { lastname } = useParams<{ lastname: string }>()

  return (
    <>
      <h1>Perfil del doctor: {lastname}</h1>
      <Footer />
    </>
  )
}

export default DoctorProfile
