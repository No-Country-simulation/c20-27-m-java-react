import Button from '@/components/Button';
import useAppointmentForm from '@/hooks/useAppointmentForm'; // Importa el hook
import { FormEvent } from 'react'; // Importa el tipo FormEvent
import { DateTime } from 'luxon';

const FormularioCitas = () => {
  const {
    formData,
    loading,
    errorMessage,
    successMessage,
    handleChange,
    handleSubmit,
  } = useAppointmentForm();

  // Función para formatear la fecha y hora antes de enviar
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Llamar a handleSubmit directamente ya que maneja la conversión
    handleSubmit(e);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
      <label htmlFor="fecha_hora" className="flex flex-col text-sm">
  Fecha y Hora:
  <input
    type="datetime-local"
    id="fecha_hora"
    name="fecha_hora"
    value={
      formData.fecha_hora
        ? DateTime.fromISO(formData.fecha_hora).toFormat("yyyy-MM-dd\'T\'HH:mm")
        : DateTime.now().toFormat("yyyy-MM-dd\'T\'HH:mm") // Valor por defecto si no hay fecha
    }
    onChange={handleChange}
    className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
    required
    aria-label="Seleccionar fecha y hora para la cita"
  />
</label>

        <label htmlFor="patientId" className="flex flex-col text-sm">
          Paciente ID:
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
            required
            readOnly
            aria-label="ID del paciente"
          />
        </label>

        <label htmlFor="doctorId" className="flex flex-col text-sm">
          Doctor ID:
          <input
            type="text"
            id="doctorId"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
            required
            readOnly
            aria-label="ID del doctor"
          />
        </label>

        <Button
          type="submit"
          label={loading ? 'Enviando...' : 'Enviar Cita'}
          className="mt-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        />

        {errorMessage && <p className="mt-2 text-center text-red-500 font-bold text-sm">{errorMessage}</p>}
        {successMessage && <p className="mt-2 text-center text-green-500 font-bold text-sm">{successMessage}</p>}
      </form>
    </div>
  );
};

export default FormularioCitas;

