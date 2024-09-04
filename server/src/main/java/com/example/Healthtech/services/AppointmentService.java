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

@Service
public class AppointmentService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final AppointmentRepository appointmentRepository;
    private final List<ValidarConsultas> validators;

    public AppointmentService(
            PatientRepository patientRepository, DoctorRepository doctorRepository,
            AppointmentRepository appointmentRepository, List<ValidarConsultas> validators) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.appointmentRepository = appointmentRepository;
        this.validators = validators;
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

        var appointment = new Appointment(null, doctor, patient, dto.dateTime(), dto.videoCallLink());
        appointmentRepository.save(appointment);

        return new AppointmentDetailDTO(appointment);
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

        if (dto.videoCallLink() != null) {
            existingAppointment.setVideoCallLink(dto.videoCallLink());
        }

        if (dto.doctorId() != null) {
            Doctor newDoctor = doctorRepository.findById(dto.doctorId())
                    .orElseThrow(() -> new ValidarIntegridad("Doctor not found"));
            existingAppointment.setDoctor(newDoctor);
        }

        appointmentRepository.save(existingAppointment);

        return new AppointmentDetailDTO(existingAppointment);
    }
}
