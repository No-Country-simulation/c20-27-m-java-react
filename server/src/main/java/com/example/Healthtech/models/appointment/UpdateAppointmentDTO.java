package com.example.Healthtech.models.appointment;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public record UpdateAppointmentDTO(
        @NotNull Long id,
        Long doctorId,
        LocalDateTime dateTime
) {
}
