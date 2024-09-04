package com.example.Healthtech.services;

import com.example.Healthtech.models.consulta.Consulta;
import com.example.Healthtech.models.consulta.DatosAgendarConsulta;
import com.example.Healthtech.models.consulta.DatosDetalleConsulta;
import com.example.Healthtech.repositories.DoctorRepository;
import com.example.Healthtech.repositories.PatientRepository;
import com.example.Healthtech.repositories.ConsultaRepository;
import com.example.Healthtech.models.consulta.validaciones.ValidarConsultas;
import com.example.Healthtech.infra.errors.ValidarIntegridad;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaConsultaService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final ConsultaRepository consultaRepository;
    private final List<ValidarConsultas> validadores;

    public AgendaConsultaService(
            PatientRepository patientRepository, DoctorRepository doctorRepository,
            ConsultaRepository consultaRepository, List<ValidarConsultas> validadores)
    {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.consultaRepository = consultaRepository;
        this.validadores = validadores;
    }


    public DatosDetalleConsulta agendar(DatosAgendarConsulta datos) {
        var paciente = patientRepository.findById(datos.idPatient())
                .orElseThrow(() -> new ValidarIntegridad("Paciente no encontrado."));

        var doctor = datos.idMedico() != null ?
                doctorRepository.findById(datos.idMedico())
                        .orElseThrow(() -> new ValidarIntegridad("Médico no encontrado."))
                : null;

        validadores.forEach(v -> v.validar(datos));

        var consulta = new Consulta(null, doctor, paciente, datos.fecha(), datos.videoLlamada());
        consultaRepository.save(consulta);

        return new DatosDetalleConsulta(consulta);
    }

    public Page<DatosDetalleConsulta> obtenerConsultasActivas(Pageable paginacion) {
        Page<Consulta> consultas = consultaRepository.findByActivoTrue(paginacion);
        return consultas.map(DatosDetalleConsulta::new);
    }
    public DatosDetalleConsulta obtenerConsultaPorId(Long id) {
        var consulta = consultaRepository.findById(id)
                .orElseThrow(() -> new ValidarIntegridad("Consulta no agendada."));
        return new DatosDetalleConsulta(consulta);
    }
}
