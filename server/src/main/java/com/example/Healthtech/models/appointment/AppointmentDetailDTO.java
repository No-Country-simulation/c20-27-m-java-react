package com.example.Healthtech.models.appointment;



import java.time.LocalDateTime;

public record AppointmentDetailDTO(
        Long id,
        Long patientId,
        Long doctorId,
        LocalDateTime dateTime,
        String videoCallLink
) {
    public AppointmentDetailDTO(Appointment appointment) {
        this(
                appointment.getId(),
                appointment.getPatient().getId_patient(),
                appointment.getDoctor().getIdMedico(),
                appointment.getDateTime(),
                appointment.getVideoCallLink()
        );
    }
}
