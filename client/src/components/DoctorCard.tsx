const DoctorCard = ({ doctor }) => {
  return (
    <div
      key={doctor.id}
      className="m-[10px] w-[250px] rounded-[5px] border border-solid border-[#ccc] bg-[#f9f9f9] p-[15px] text-center shadow-3xl"
    >
      <figure className="h-auto w-full rounded-[5px]">
        <img src={doctor.image} alt="" />
      </figure>
      <h2>
        {doctor.name} {doctor.surname}
      </h2>
      <p>Especialidad: {doctor.specialty}</p>
      <p>Email: {doctor.email}</p>
      <p>Teléfono: {doctor.phone}</p>
    </div>
  )
}

export default DoctorCard
