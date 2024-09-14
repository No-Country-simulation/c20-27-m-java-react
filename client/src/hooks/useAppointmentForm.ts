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

  useEffect(() => {
    fetchIds();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.fecha_hora || !formData.patientId || !formData.doctorId) {
      setErrorMessage('Todos los campos son requeridos.');
      setLoading(false);
      return;
    }

    console.log('Fecha y hora proporcionada:', formData.fecha_hora);

    try {
      // Verificar el formato recibido
      console.log('Formato esperado: yyyy-MM-dd\'T\'HH:mm');
      console.log('Formato recibido:', formData.fecha_hora);

      // Validar y convertir la fecha y hora usando DateTime.fromFormat
      const dateTime = DateTime.fromFormat(formData.fecha_hora, 'yyyy-MM-dd\'T\'HH:mm');
      
      if (!dateTime.isValid) {
        console.error('Fecha y hora no válidas:', dateTime.invalidExplanation);
        throw new Error('Fecha y hora no válidas: ' + formData.fecha_hora);
      }

      // Convertir la fecha y hora a formato ISO 8601
      const isoDateString = dateTime.toUTC().toISO(); // Usar toUTC() para asegurar la conversión correcta
      console.log('Fecha y hora convertida a ISO:', isoDateString);

      const response = await fetch(
        'https://c20-27-m-java-react-production-b1fb.up.railway.app/appointments',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            fecha_hora: isoDateString,
          }),
        }
      );

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
