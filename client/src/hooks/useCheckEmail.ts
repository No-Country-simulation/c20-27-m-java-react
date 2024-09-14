// src/hooks/useCheckEmail.ts
import { useState } from "react";
import axios from "axios";

const useCheckEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkEmail = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Consultar el endpoint de doctores
      const doctorsResponse = await axios.get('https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors');
      // Consultar el endpoint de pacientes
      const patientsResponse = await axios.get('https://c20-27-m-java-react-production-b1fb.up.railway.app/patients/all');

      const doctors = doctorsResponse.data;
      const patients = patientsResponse.data;

      const emailInDoctors = doctors.some((doctor: any) => doctor.email === email);
      const emailInPatients = patients.some((patient: any) => patient.email === email);

      if (emailInDoctors || emailInPatients) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
      }
    } catch (err) {
      setError("Hubo un error al verificar el correo.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, emailExists, error, checkEmail };
};

export default useCheckEmail;
