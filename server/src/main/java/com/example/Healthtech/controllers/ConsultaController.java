package com.example.Healthtech.controllers;

import com.example.Healthtech.models.consulta.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity agendar(@RequestBody @Valid DatosAgendarConsulta datos){
        var response = agendaConsultaService.agendar(datos);
        return ResponseEntity.ok(response);
    }
}


