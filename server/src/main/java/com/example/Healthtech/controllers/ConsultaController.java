package com.example.Healthtech.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;

import com.example.Healthtech.models.consulta.*;
import com.example.Healthtech.services.AgendaConsultaService;


@RestController
@RequestMapping("/consultas")
public class ConsultaController {

    final AgendaConsultaService agendaConsultaService;

    @Autowired
    public ConsultaController(AgendaConsultaService agendaConsultaService){
        this.agendaConsultaService = agendaConsultaService;
    }

    @PostMapping
    @Transactional
    public ResponseEntity<DatosDetalleConsulta> agendar(@RequestBody @Valid DatosAgendarConsulta datos, UriComponentsBuilder uriComponentsBuilder) {

        var consulta = agendaConsultaService.agendar(datos);

        URI url = uriComponentsBuilder.path("/consultas/{id}").buildAndExpand(consulta.id()).toUri();
        return ResponseEntity.created(url).body(consulta);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosDetalleConsulta> obtenerConsultaPorId(@PathVariable Long id) {
        // Llama al servicio para obtener la consulta por ID
        var consulta = agendaConsultaService.obtenerConsultaPorId(id);
        return ResponseEntity.ok(consulta);

    }

    @GetMapping
    public ResponseEntity<Page<DatosDetalleConsulta>> obtenerConsultasActivas(@PageableDefault(size = 10, sort = "fecha") Pageable paginacion) {
        Page<DatosDetalleConsulta> consultasActivas = agendaConsultaService.obtenerConsultasActivas(paginacion);
        return ResponseEntity.ok(consultasActivas);
    }
}


