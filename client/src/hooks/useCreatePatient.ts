import { useState } from "react"
import axios from "axios"

interface Patient {
  name: string
  lastName: string
  email: string
  telephone: string
  address: string
}

export const useCreatePatient = (patient: Patient) => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createPatient = async () => {
    if (
      !patient.name ||
      !patient.lastName ||
      !patient.email ||
      !patient.telephone ||
      !patient.address
    ) {
      setError("Todos los campos son requeridos.")
      return
    }

    try {
      setLoading(true)
      setError(null)

      // Realiza la solicitud POST al endpoint para crear un paciente
      await axios.post(
        "https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/create",
        patient,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      setSuccess(true)
    } catch (err) {
      // Maneja el error correctamente
      if (axios.isAxiosError(err)) {
        // Error de Axios
        setError(err.response?.data?.message || "Error al crear paciente")
      } else {
        // Error genérico
        setError("Error inesperado al crear paciente")
      }
    } finally {
      setLoading(false)
    }
  }

  return [success, loading, error, createPatient] as const
}
