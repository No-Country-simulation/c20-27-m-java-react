import Button from "@/components/Button"
import useAppointmentForm from "@/hooks/useAppointmentForm"
import { FormEvent } from "react"

const FormularioCitas = () => {
  const { formData, loading, errorMessage, successMessage, handleChange, handleSubmit } =
    useAppointmentForm()

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
            readOnly
            className="mt-1 rounded-md border bg-gray-100 p-2 text-gray-800"
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
            readOnly
            className="mt-1 rounded-md border bg-gray-100 p-2 text-gray-800"
            aria-label="ID del doctor"
          />
        </label>

        <Button
          type="submit"
          label={loading ? "Enviando..." : "Enviar Cita"}
          className="bg-blue-500 hover:bg-blue-600 mt-3 rounded p-2 text-sm text-white"
          aria-label="Enviar formulario de cita"
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
