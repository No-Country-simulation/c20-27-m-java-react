import { useState } from "react";
import Button from "@/components/Button";
import { useCreateAppointment } from "@/hooks/useCreateAppointment";
import { FormEvent } from "react";

const FormularioCitas = () => {
  const [formData, setFormData] = useState({
    doctorId: '1',  // Asegúrate de que estos sean strings
    patientId: '2', // Asegúrate de que estos sean strings
    dateTime: '',
  });
  const { createAppointment, loading, error, successMessage } = useCreateAppointment();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // formatear fecha y hora
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toISOString().split('.')[0]; 
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedFormData = {
      ...formData,
      dateTime: formatDateTime(formData.dateTime),
    };

    createAppointment(formattedFormData);
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-4 shadow-lg">
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
        <label htmlFor="dateTime" className="flex flex-col text-sm">
          Fecha y Hora:
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            className="mt-1 rounded-md border p-2"
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
            required
            className="mt-1 rounded-md border p-2"
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
            required
            className="mt-1 rounded-md border p-2"
          />
        </label>

        <Button
          type="submit"
          label={loading ? "Enviando..." : "Enviar Cita"}
          className="bg-blue-500 hover:bg-blue-600 mt-3 rounded p-2 text-sm text-white"
        />

        {error && (
          <p className="mt-2 text-center text-sm font-bold text-red-500">{error}</p>
        )}
        {successMessage && (
          <p className="text-green-500 mt-2 text-center text-sm font-bold">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FormularioCitas;