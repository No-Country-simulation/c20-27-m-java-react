import Button from "@/components/Button"
import useAppointmentForm from "@/hooks/useAppointmentForm" // Importa el hook
import { FormEvent } from "react" // Importa el tipo FormEvent

const FormularioCitas = () => {
  const { formData, loading, errorMessage, successMessage, handleChange, handleSubmit } =
    useAppointmentForm()

  // Función para formatear la fecha y hora antes de enviar
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevenir el comportamiento predeterminado del formulario

    // Llamar a handleSubmit directamente ya que maneja la conversión
    handleSubmit(e)
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-4 shadow-lg">
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
        <label htmlFor="fecha_hora" className="flex flex-col text-sm">
          Fecha y Hora:
          <input
            type="datetime-local"
            name="fecha_hora"
            value={formData.fecha_hora}
            onChange={handleChange}
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
            className="mt-1 rounded-md border bg-gray-100 p-2 text-gray-800"
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
            className="mt-1 rounded-md border bg-gray-100 p-2 text-gray-800"
            required
            readOnly
            aria-label="ID del doctor"
          />
        </label>

        <Button
          type="submit"
          label={loading ? "Enviando..." : "Enviar Cita"}
          className="bg-blue-500 hover:bg-blue-600 mt-3 rounded p-2 text-sm text-white"
        />

        {errorMessage && (
          <p className="mt-2 text-center text-sm font-bold text-red-500">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 mt-2 text-center text-sm font-bold">{successMessage}</p>
        )}
      </form>
    </div>
  )
}

export default FormularioCitas
