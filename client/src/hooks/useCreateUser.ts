import { useState } from "react"
import axios from "axios"

const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createUser = async (username: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.post(
        "https://c20-27-m-java-react-production-b1fb.up.railway.app/users/create",
        {
          userName: username,
          password: password,
        },
      )
      setIsLoading(false)
      const result = response.data
      console.log(response)
      console.log(result)
    } catch (error) {
      setIsLoading(false)
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message || "Error al crear usuario")
      } else {
        setError("Error al crear usuario")
      }
    }
  }

  return { isLoading, error, createUser }
}

export default useCreateUser
