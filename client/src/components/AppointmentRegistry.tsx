
import Button from '@/components/Button';
import useAppointmentForm from '@/hooks/useAppointmentForm'; // Importa el hook

const FormularioCitas = () => {
  const {
    formData,
    loading,
    errorMessage,
    successMessage,
    handleChange,
    handleSubmit,
  } = useAppointmentForm(); // Usa el hook

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="fecha_hora" className="flex flex-col text-sm">
          Fecha y Hora:
          <input
            type="datetime-local"
            id="fecha_hora"
            name="fecha_hora"
            value={formData.fecha_hora}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
            required
          />
        </label>

        <label htmlFor="estado" className="flex flex-col text-sm">
          Estado:
          <input
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
            required
          />
        </label>

        <label htmlFor="enlace_video_llamada" className="flex flex-col text-sm">
          Enlace de Video Llamada:
          <input
            type="url"
            id="enlace_video_llamada"
            name="enlace_video_llamada"
            value={formData.enlace_video_llamada}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
            required
          />
        </label>

        <label htmlFor="motivo" className="flex flex-col text-sm">
          Motivo:
          <textarea
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md text-gray-800 bg-gray-100"
            rows={3}
            required
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



