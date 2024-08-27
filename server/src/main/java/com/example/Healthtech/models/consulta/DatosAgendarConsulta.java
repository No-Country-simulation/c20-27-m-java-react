package com.example.Healthtech.models.consulta;

import com.example.Healthtech.models.Patient;
import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record DatosAgendarConsulta(
        Long id,
        Long idMedico,
        @NotNull
        Long idPatient,
        @NotNull
        @Future
        LocalDateTime fecha,
        String videoLlamada

) {
}
