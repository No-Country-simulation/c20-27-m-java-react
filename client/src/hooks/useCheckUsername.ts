import { useState } from "react";
import axios from "axios";

const useCheckUsername = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const CheckCredentials = async (username: string, password: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://c20-27-m-java-react-production-b1fb.up.railway.app/users`);
            const users = response.data;

            if (!Array.isArray(users)) {
                throw new Error("Datos de usuarios inválidos");
            }

            const user = users.find(
                (user: { userName: string; password: string }) =>
                    user.userName === username && user.password === password
            );

            if (user) {
                localStorage.setItem("userId", user.userId); 
                
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
                setError("Usuario o contraseña incorrectas");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.message || "Error al autenticar");
            } else {
                setError("Error al verificar credenciales");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        authenticated,
        error,
        CheckCredentials
    };
};

export default useCheckUsername;
