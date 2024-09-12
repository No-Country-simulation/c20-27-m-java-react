import Logo from "@/assets/logoInDark.svg"
import { useState, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { EnvelopeIcon, PadlockIcon } from "@/assets/icons"
import { Link } from "react-router-dom"

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  //   const [loading, setLoading] = useState<boolean>(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string>("")
  const navigate = useNavigate()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.email) {
      newErrors.email = "El campo de email es requerido"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Formato de email inválido"
    }

    if (!formData.password) {
      newErrors.password = "El campo de contraseña es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setServerError(null)
    setSuccessMessage("")

    if (!validateForm()) {
      return
    }

    // setLoading(true)

    try {
      const response = await fetch(
        "https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      )

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Credenciales incorrectas. Por favor, intenta de nuevo.")
        }
        if (response.status >= 500) {
          throw new Error("Error en el servidor. Intente más tarde.")
        }
        throw new Error("Error desconocido. Inténtelo de nuevo.")
      }

      const result = await response.json()

      const token = result.accessToken
      localStorage.setItem("authToken", token)

      //   setLoading(false)
      setSuccessMessage("Inicio de sesión exitoso. Redirigiendo...")

      setTimeout(() => {
        navigate("/dashboard")
      }, 1000)
    } catch (error: unknown) {
      //   setLoading(false)
      if (error instanceof Error) {
        setServerError(error.message)
      } else {
        setServerError("Ocurrió un error desconocido.")
      }
    }
  }

  return (
    <div className="mt-16 flex flex-col items-center">
      <figure className="mb-4 size-[66px]">
        <img src={Logo} alt="Logo" />
      </figure>

      <h2 className="mb-8 text-center text-xl text-[#6B7280]">
        Health
        <span className="text-[#111928]">Tech</span>
      </h2>

      <p className="mb-2 text-xl font-semibold text-[#1C2A3A]">¡Hola, Bienvenido de vuelta!</p>
      <p className="mb-8 text-sm text-[#6B7280]">Espero que le vaya bien.</p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative mb-5">
          <figure className="absolute top-[14px] pl-4">
            <img src={EnvelopeIcon} alt="" />
          </figure>
          <input
            type="email"
            name="email"
            className={`h-[45px] w-full rounded-[10px] border bg-[#F9FAFB] px-3 pl-[40px] outline-none ${errors.email ? "border-red-500" : "border-gray-300"} `}
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="relative mb-5">
          <figure className="absolute top-[14px] pl-4">
            <img src={PadlockIcon} alt="" />
          </figure>
          <input
            type="password"
            name="password"
            className={`h-[45px] w-full rounded-[10px] border bg-[#F9FAFB] px-3 pl-[40px] outline-none ${errors.password ? "border-red-500" : "border-gray-300"} `}
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>

        <button
          className="mb-8 mt-1 w-full rounded-full bg-[#1C2A3A] py-4 text-white"
          type="submit"
        >
          Iniciar Sesión
        </button>
      </form>

      <p className="mb-2 text-sm font-medium text-[#1C64F2]">¿Has olvidado tu contraseña?</p>
      <p className="mb-8 flex gap-1 text-sm text-[#6B7280]">
        No tienes una cuenta?
        <Link to="/profile" className="text-[#1C64F2]">
          Crear una
        </Link>
      </p>

      {serverError && <p className="mt-4 text-red-500">{serverError}</p>}
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  )
}

export default SignIn
