package com.example.Healthtech.models.appointment;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record CreateAppointmentDTO(
        Long id,
        Long doctorId,
        @NotNull
        Long patientId,
        @NotNull
        @Future
        LocalDateTime dateTime,
        String videoCallLink
) {
}
