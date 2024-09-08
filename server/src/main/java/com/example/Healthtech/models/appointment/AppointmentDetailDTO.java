package com.example.Healthtech.models.appointment;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;


public record AppointmentDetailDTO(
        Long id,
        Long patientId,
        Long doctorId,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
        LocalDateTime dateTime,
        String videoCallLink
) {
    public AppointmentDetailDTO(Appointment appointment) {
        this(
                appointment.getId(),
                appointment.getPatient() != null ? appointment.getPatient().getPatient_id() : null,
                appointment.getDoctor() != null ? appointment.getDoctor().getIdMedico() : null,
                appointment.getDateTime(),
                appointment.getVideoCallLink()
        );
    }
}
