HealthTech está diseñada para facilitar y optimizar la gestión de citas entre pacientes y profesionales de la salud.
Este sistema digital permite a los usuarios reservar, modificar o cancelar turnos médicos de manera rápida y eficiente, directamente desde sus dispositivos móviles sin necesidad de moverse de sus hogares.
Además, los médicos podrán gestionar sus agendas de manera organizada, evitando la sobrecarga de citas y garantizando un mejor flujo de atención.

Con una interfaz intuitiva y muy fácil de usar, HealthTech ofrece funciones clave como la búsqueda de especialistas, disponibilidad horaria, y opciones de videollamada para consultas virtuales. A su vez, integra una base de datos segura que protege la información personal y médica de los usuarios, cumpliendo con los más altos estándares de seguridad y privacidad.

Este desarrollo responde a la necesidad creciente de digitalizar procesos médicos, mejorar la experiencia del paciente y optimizar los recursos de los profesionales de salud, asegurando una atención más eficiente y accesible.

---------------------------------------------------------------------

Endpoints doctores:

- Listado de doctores: https://c20-27-m-java-react-production.up.railway.app/doctors

- Creación de perfil de doctor: https://c20-27-m-java-react-production.up.railway.app/doctors/createDoctor

- Actualizar perfil de doctor por ID: https://c20-27-m-java-react-production.up.railway.app/doctors/{id}

- Búsqueda de doctor por ID: https://c20-27-m-java-react-production.up.railway.app/doctors/{id}

- Borrar perfil de médico: https://c20-27-m-java-react-production.up.railway.app/doctors/{id}

- Retención de perfil de doctor borrado: https://c20-27-m-java-react-production.up.railway.app/doctors/deleted

- Restauración del perfil borrado: https://c20-27-m-java-react-production.up.railway.app/doctors/restore/{id}

-------------------------------------------
Endpoints pacientes:

- Listado de pacientes: https://c20-27-m-java-react-production.up.railway.app/patients/all

- Registro de pacientes: https://c20-27-m-java-react-production.up.railway.app/patients/create

- Actualización de datos del paciente: https://c20-27-m-java-react-production.up.railway.app/patients/update/{patient_id}

- Búsqueda de paciente por ID: https://c20-27-m-java-react-production.up.railway.app/patients/{patient_id}

- Borrado de paciente por ID: https://c20-27-m-java-react-production.up.railway.app/patients/{patient_id}

- Retencion de paciente borrado: https://c20-27-m-java-react-production.up.railway.app/patients/deleted

- Restauración del paciente borrado: https://c20-27-m-java-react-production.up.railway.app/patients/restore/{patient_id}

- Historial médico del paciente (post y get): https://c20-27-m-java-react-production.up.railway.app/patients/{id}/medical-histories

-------------------------------------------
Endpoints Admin:

- Registro de Admin individual: https://c20-27-m-java-react-production.up.railway.app/admins/createadmin

- Registro de varios admins a la vez: https://c20-27-m-java-react-production.up.railway.app/admins/createadmins

- Obtener un listado de admins: https://c20-27-m-java-react-production.up.railway.app/admins

- Buscar admin por ID: https://c20-27-m-java-react-production.up.railway.app/admins/{id}

- Actualización de datos de admin: https://c20-27-m-java-react-production.up.railway.app/admins/{id}

- Borrado de perfil de admin: https://c20-27-m-java-react-production.up.railway.app/admins/{id}

- Retención de perfil de admin borrado: https://c20-27-m-java-react-production.up.railway.app/admins/deleted

- Restauración de perfil de admin borrado: https://c20-27-m-java-react-production.up.railway.app/admins/restore/{id}

-------------------------------------------
Enpoints de citas medicas:

- Creación de una nueva cita: https://c20-27-m-java-react-production.up.railway.app/appointments

- Obtención del listado de citas activas: https://c20-27-m-java-react-production.up.railway.app/appointments

- Obtención del listado de citas canceladas: https://c20-27-m-java-react-production.up.railway.app/appointments/canceled

- Búsqueda individual de cita cancelada : https://c20-27-m-java-react-production.up.railway.app/appointments/canceled/{id}

- Busqueda de cita por ID: https://c20-27-m-java-react-production.up.railway.app/appointment/{id}

- Actualización del registro de citas: https://c20-27-m-java-react-production.up.railway.app/appointments
