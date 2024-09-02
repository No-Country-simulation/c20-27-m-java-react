import { useState, useEffect } from "react"
import { Doctor } from "@/components/Modal"

export const useFetchDoctor = (username: string) => {
  const [data, setData] = useState<Doctor | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (username.trim() === "") {
      setData(null)
      setLoading(false)
      setError(null)
      return
    }

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data: Doctor = await response.json()
        setData(data)
      } catch (err) {
        setError(new Error((err as Error).message))
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchData()
    }
  }, [username])

  return [data, loading, error] as const
}
