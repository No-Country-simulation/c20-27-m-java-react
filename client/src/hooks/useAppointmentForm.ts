import { useState } from 'react';

interface FormData {
  fecha_hora: string;
  estado: string;
  enlace_video_llamada: string;
  motivo: string;
}

const useAppointmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fecha_hora: '',
    estado: '',
    enlace_video_llamada: '',
    motivo: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      // Enviar los datos a la API
      const response = await fetch('https://c20-27-m-java-react-production-b1fb.up.railway.app/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la creación de la cita');
      }

      // Mostrar mensaje de éxito si todo va bien
      setSuccessMessage('Cita creada con éxito');
    } catch (error) {
      setErrorMessage('Error al crear la cita');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    errorMessage,
    successMessage,
    handleChange,
    handleSubmit,
  };
};

export default useAppointmentForm;
