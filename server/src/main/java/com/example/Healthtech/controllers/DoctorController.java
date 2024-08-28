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

    //Delete Fisico
    /*@DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
    }

    @GetMapping("/{id}/appointments")
    public List<Doctor> getDoctorAppointments(@PathVariable Long id) {
        return doctorService.consultAppointments(id);
    }

    @GetMapping("/{doctorId}/access-medical-record/{patientId}")
    public void accessPatientMedicalRecord(@PathVariable Long doctorId, @PathVariable Long patientId) {
        doctorService.accessPatientMedicalRecord(doctorId, patientId);
    }

     */
    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
    }

    @GetMapping("/deleted")// Endpoint para obtener doctores eliminados
    public List<Doctor> getDeletedDoctors() {
        return doctorService.getDeletedDoctors();
    }

    @PutMapping("/restore/{id}")// Endpoint para restaurar un doctor eliminado
    public void restoreDoctor(@PathVariable Long id) {
        doctorService.restoreDoctor(id);
    }
}
