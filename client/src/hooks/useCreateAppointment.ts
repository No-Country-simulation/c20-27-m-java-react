import { useState } from "react";

interface AppointmentData {
  doctorId: string; 
  patientId: string; // Cambiado a string
  dateTime: string;
}

export const useCreateAppointment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const createAppointment = async (appointmentData: AppointmentData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
console.log(appointmentData)
    try {
      const response = await fetch('https://c20-27-m-java-react-production-b1fb.up.railway.app/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });


      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error desde el servidor:", errorData);
        throw new Error(errorData.message || 'Error al crear la cita');
      }

      const data = await response.json();
      
      console.log("Respuesta del servidor:", data);
      setSuccessMessage('Cita creada con éxito');
    } catch (err: any) {
      console.error('Error en la solicitud:', err);
      setError(err.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return { createAppointment, loading, error, successMessage };
};