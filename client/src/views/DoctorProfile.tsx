import { useParams } from "react-router-dom"
import Footer from "@/components/Footer"

const DoctorProfile = () => {
  const { name } = useParams<{ name: string }>()

  return (
    <>
      <h1>Perfil del doctor: {name}</h1>
      <Footer />
    </>
  )
}

export default DoctorProfile
