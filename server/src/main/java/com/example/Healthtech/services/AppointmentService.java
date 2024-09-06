package com.example.Healthtech.services;

import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.models.appointment.Appointment;
import com.example.Healthtech.models.appointment.AppointmentDetailDTO;
import com.example.Healthtech.models.appointment.CreateAppointmentDTO;
import com.example.Healthtech.models.appointment.UpdateAppointmentDTO;
import com.example.Healthtech.models.appointment.validaciones.ValidarConsultas;
import com.example.Healthtech.exception.ValidarIntegridad;
import com.example.Healthtech.repositories.DoctorRepository;
import com.example.Healthtech.repositories.PatientRepository;
import com.example.Healthtech.repositories.AppointmentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class AppointmentService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final AppointmentRepository appointmentRepository;
    private final List<ValidarConsultas> validators;
    private final EmailService emailService;



    public AppointmentService(
            PatientRepository patientRepository, DoctorRepository doctorRepository,
            AppointmentRepository appointmentRepository, List<ValidarConsultas> validators,
            EmailService emailService) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.appointmentRepository = appointmentRepository;
        this.validators = validators;
        this.emailService = emailService;
    }

    public AppointmentDetailDTO schedule(CreateAppointmentDTO dto) {
        var patient = patientRepository.findById(dto.patientId())
                .orElseThrow(() -> new ValidarIntegridad("Patient not found."));

        var doctor = dto.doctorId() != null ?
                doctorRepository.findById(dto.doctorId())
                        .orElseThrow(() -> new ValidarIntegridad("Doctor not found."))
                : null;


        // Validar datos
        validators.forEach(v -> v.validar(dto));

        String videoCallLink = generateVideoCallLink();

        var appointment = new Appointment(null, doctor, patient, dto.dateTime(), videoCallLink);
        appointmentRepository.save(appointment);

        notifyParticipants(appointment);
        return new AppointmentDetailDTO(appointment);
    }

    private String generateVideoCallLink(){

        String roomId = UUID.randomUUID().toString();
        return "https://meet.jit.si/" + roomId;
    }

    private void notifyParticipants(Appointment appointment) {
        String doctorEmail = appointment.getDoctor().getEmail();
        String doctorName = appointment.getDoctor().getNombre();  // Asegúrate de que tu modelo tenga un método getName()
        String patientEmail = appointment.getPatient().getEmail();
        String patientName = appointment.getPatient().getName();  // Asegúrate de que tu modelo tenga un método getName()

        emailService.sendNotification(doctorEmail, appointment.getVideoCallLink(), appointment.getDateTime(), doctorName);
        emailService.sendNotification(patientEmail, appointment.getVideoCallLink(), appointment.getDateTime(), patientName);
    }

    public Page<AppointmentDetailDTO> getActiveAppointments(Pageable pageable) {
        Page<Appointment> appointments = appointmentRepository.findByActiveTrue(pageable);
        return appointments.map(AppointmentDetailDTO::new);
    }

    public AppointmentDetailDTO getAppointmentById(Long id) {

        var appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new ValidarIntegridad("Appointment not found."));
        return new AppointmentDetailDTO(appointment);
    }

    public AppointmentDetailDTO updateAppointment(UpdateAppointmentDTO dto) {
        if (dto == null) {
            throw new IllegalArgumentException("Update data cannot be null.");
        }

        Appointment existingAppointment = appointmentRepository.findById(dto.id())
                .orElseThrow(() -> new ValidarIntegridad("Appointment not found"));

        if (dto.dateTime() != null) {
            existingAppointment.setDateTime(dto.dateTime());
        }

        if (dto.doctorId() != null) {
            Doctor newDoctor = doctorRepository.findById(dto.doctorId())
                    .orElseThrow(() -> new ValidarIntegridad("Doctor not found"));
            existingAppointment.setDoctor(newDoctor);
        }

        appointmentRepository.save(existingAppointment);

        return new AppointmentDetailDTO(existingAppointment);
    }

    public Appointment findAppointmentById(Long id) {
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new ValidarIntegridad("Appointment not found."));
    }

    public void save(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    public Page<AppointmentDetailDTO> getDeactiveAppointments(Pageable pageable) {
        Page<Appointment> canceledAppointment = appointmentRepository.findByActiveFalse(pageable);
        return canceledAppointment.map(AppointmentDetailDTO::new);
    }
}
