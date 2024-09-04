package com.example.Healthtech.controllers;

import com.example.Healthtech.models.appointment.AppointmentDetailDTO;
import com.example.Healthtech.models.appointment.CreateAppointmentDTO;
import com.example.Healthtech.models.appointment.UpdateAppointmentDTO;
import com.example.Healthtech.services.AppointmentService;
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


@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping
    @Transactional
    public ResponseEntity<AppointmentDetailDTO> schedule(@RequestBody @Valid CreateAppointmentDTO datos, UriComponentsBuilder uriComponentsBuilder) {
        var appointment = appointmentService.schedule(datos);

        URI url = uriComponentsBuilder.path("/appointments/{id}").buildAndExpand(appointment.id()).toUri();
        return ResponseEntity.created(url).body(appointment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentDetailDTO> getAppointmentById(@PathVariable Long id) {
        var appointment = appointmentService.getAppointmentById(id);
        return ResponseEntity.ok(appointment);
    }

    @GetMapping
    public ResponseEntity<Page<AppointmentDetailDTO>> getActiveAppointments(@PageableDefault(size = 10, sort = "dateTime") Pageable pagination) {
        Page<AppointmentDetailDTO> activeAppointments = appointmentService.getActiveAppointments(pagination);
        return ResponseEntity.ok(activeAppointments);
    }

    @PutMapping
    @Transactional
    public ResponseEntity<AppointmentDetailDTO> updateAppointment(@RequestBody @Valid UpdateAppointmentDTO datos) {
        AppointmentDetailDTO updatedAppointment = appointmentService.updateAppointment(datos);
        return ResponseEntity.ok(updatedAppointment);
    }
}
