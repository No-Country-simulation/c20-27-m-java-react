package com.example.Healthtech.controllers;

import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<Doctor> getDoctors() {
        return doctorService.getAllDoctors();
    }

    @PostMapping
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
    }
    /*
    @GetMapping("/{id}/appointments")
    public List<Doctor> getDoctorAppointments(@PathVariable Long id) {
        return doctorService.consultAppointments(id);
    }

    @GetMapping("/{doctorId}/access-medical-record/{patientId}")
    public void accessPatientMedicalRecord(@PathVariable Long doctorId, @PathVariable Long patientId) {
        doctorService.accessPatientMedicalRecord(doctorId, patientId);
    }

     */
}
