package com.example.Healthtech.models.consulta;

import java.time.LocalDateTime;
public record DatosDetalleConsulta(
        Long id,
        Long idPatient,
        Long idMedico,
        LocalDateTime fecha,
        String videoLlamada
) {
    public DatosDetalleConsulta(Consulta consulta) {
        this(consulta.getId(), consulta.getPatient().getPatient_id(), consulta.getDoctor().getIdMedico(),
                consulta.getFecha(), consulta.getVideoLlamada());
    }
}
