import { useState, useEffect } from "react"
import { Doctor } from "@/components/Modal"

export const useFetchDoctor = (apellido: string) => {
  const [data, setData] = useState<Doctor[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (apellido.trim() === "") {
      setData([])
      setLoading(false)
      setError(null)
      return
    }

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://c20-27-m-java-react-production.up.railway.app/doctors/findby/${apellido}`,
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data: Doctor = await response.json()
        setData([data])
      } catch (err) {
        setError(new Error((err as Error).message))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [apellido])

  return [data, loading, error] as const
}