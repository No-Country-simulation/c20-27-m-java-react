import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const useAppointmentForm = () => {
  const [formData, setFormData] = useState({
    fecha_hora: '',
    patientId: '',
    doctorId: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Función para obtener los IDs del paciente y del doctor
  const fetchIds = async () => {
    try {
      const patientId = '0';  
      const doctorId = '3';   

      setFormData((prevFormData) => ({
        ...prevFormData,
        patientId,
        doctorId,
      }));
    } catch (error) {
      setErrorMessage('Error al obtener IDs: ' + (error as Error).message);
    }
  };

  // Obtener los IDs del paciente y doctor cuando se monta el componente
  useEffect(() => {
    fetchIds();
  }, []);

  // Manejar cambios en los inputs del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Validar que todos los campos estén completos
    if (!formData.fecha_hora || !formData.patientId || !formData.doctorId) {
      setErrorMessage('Todos los campos son requeridos.');
      setLoading(false);
      return;
    }

    console.log('Fecha y hora proporcionada:', formData.fecha_hora);

    try {
      // Convertir la fecha y hora al formato requerido por el backend
      const dateTime = DateTime.fromFormat(formData.fecha_hora, 'yyyy-MM-dd\'T\'HH:mm');
      
      if (!dateTime.isValid) {
        throw new Error('Fecha y hora no válidas: ' + formData.fecha_hora);
      }

      // Convertir la fecha y hora al formato que el backend espera
      const formattedDateTime = dateTime.toFormat('yyyy-MM-dd\'T\'HH:mm:ss');
      console.log('Fecha y hora formateada:', formattedDateTime);

      const response = await fetch(
        'https://c20-27-m-java-react-production-b1fb.up.railway.app/appointments',  // Endpoint correcto
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            fecha_hora: formattedDateTime,  
          }),
        }
      );

      // Manejar la respuesta del servidor
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Detalles del error:', errorData);
        throw new Error('Error en la creación de la cita: ' + (errorData.error || 'No se recibió mensaje de error'));
      }

      setSuccessMessage('Cita creada con éxito');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage('Error al crear la cita: ' + error.message);
      } else {
        setErrorMessage('Error desconocido al crear la cita');
      }
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
