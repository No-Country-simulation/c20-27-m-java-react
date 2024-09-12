import Logo from "@/assets/logo.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Loading = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 1024) {
        setIsVisible(true)
      } else {
        navigate("/home")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [navigate])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        navigate("/home")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, navigate])

  return isVisible ? (
    <section className="absolute inset-0 bg-purple">
      <div className="flex h-screen flex-col items-center justify-center gap-3">
        <figure className="size-[66px]">
          <img src={Logo} alt="" />
        </figure>
        <h1 className="text-xl text-[#cbcbcb]">
          Health
          <span className="text-white">Tech</span>
        </h1>
      </div>
    </section>
  ) : null
}

export default Loading
