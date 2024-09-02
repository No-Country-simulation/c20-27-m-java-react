package com.example.Healthtech.models.consulta;

import com.example.Healthtech.models.Doctor;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record DatosActualizarCita(
        @NotNull Long id,
        Doctor doctor,
        LocalDateTime fecha,
        String videoLlamada
) {
}
