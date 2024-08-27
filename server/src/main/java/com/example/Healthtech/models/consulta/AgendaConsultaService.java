package com.example.Healthtech.models.consulta;

import com.example.Healthtech.repositories.PatientRepository;
import com.example.Healthtech.models.consulta.validaciones.ValidarConsultas;
import com.example.Healthtech.infra.errors.ValidarIntegridad;
import java.util.List;

public class "AgendaConsultaService {

    final PatientRepository patientRepository;
    //final MedicoRepository medicoRepository;
    final ConsultaRepository consultaRepository;
    final List<ValidarConsultas> validadores;

    public AgendaConsultaService(PatientRepository patientRepository,
                                 ConsultaRepository consultaRepository, List<ValidarConsultas> validadores){
        this.patientRepository = patientRepository;
      //  this.medicoRepository = medicoRepository;
        this.consultaRepository = consultaRepository;
        this.validadores = validadores;
    }

    public DatosDetalleConsulta agendar(DatosAgendarConsulta datos){
        if (!patientRepository.findById(datos.idPatient()).isPresent()) {
            throw new ValidarIntegridad("Paciente no encontrado.");
        }
       /*
        if (datos.idMedico() != null && !medicoRepository.existsById(datos.idMedico())){
            throw new ValidarIntegridad(("Medico no encontrado."));
        }

        */

        validadores.forEach(v -> v.validar(datos));

        var paciente = patientRepository.findById(datos.idPatient()).get();
//        var medico = seleccionarMedico(datos);
  //      if(medico==null){
    //        throw new ValidarIntegridad("No existe medico disponible para este horario y especialidad");
      //  }
        var consulta = new Consulta (null, medico, paciente, datos.fecha(), datos.videoLlamada());
        consultaRepository.save(consulta);

        return new DatosDetalleConsulta(consulta);
    }

}

