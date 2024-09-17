import { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import FormularioCitas from "@/components/AppointmentRegistry";
import CloseIcon from "@/assets/icons/close.svg";

export interface Doctor {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
  telefono: string;
  imagen: string;
}

interface DoctorsProps {
  selectedLastName: string;
  selectedSpecialty: string;
}

const DoctorsList = ({ selectedLastName, selectedSpecialty }: DoctorsProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://c20-27-m-java-react-production-b1fb.up.railway.app/doctors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Doctor[] = await response.json();
        setDoctors(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching doctors: ", err);
        setError("Error fetching doctors");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const openModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  const filteredDoctors = doctors.filter(doctor =>
    (selectedLastName === "" || doctor.apellido.toLowerCase().includes(selectedLastName.toLowerCase())) &&
    (selectedSpecialty === "" || doctor.especialidad.toLowerCase() === selectedSpecialty.toLowerCase())
  );

  return (
    <section className="mx-auto my-0 flex flex-wrap justify-center p-4">
      {loading && <p className="text-gray-800">Cargando...</p>}
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {!loading && !error && filteredDoctors.length === 0 && (
        <p className="text-gray-800">No hay doctores disponibles para la especialidad "{selectedSpecialty}".</p>
      )}
      {!loading && !error && filteredDoctors.length > 0 && (
        filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBookAppointment={() => openModal(doctor)}
          />
        ))
      )}

      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 bg-transparent text-gray-700 rounded hover:bg-red-600"
            >
              <img src={CloseIcon} alt="Cerrar" className="w-4 h-4" />
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Agendar cita con {selectedDoctor.nombre} {selectedDoctor.apellido}
            </h2>
            <FormularioCitas />
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorsList;
