package com.example.Healthtech.controllers;

import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.services.DoctorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<Doctor> getDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/findby/{apellido}")
    public ResponseEntity<?> getDoctorByApellido(@PathVariable String apellido) {
        Doctor doctor = doctorService.findDoctorByApellido(apellido);
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Doctor no encontrado");
        }
    }


    @PostMapping("/createDoctor")
    public ResponseEntity<Doctor> createDoctor(@Valid @RequestBody Doctor doctor) {
        Doctor createdDoctor = doctorService.saveDoctor(doctor);
        return ResponseEntity.ok(createdDoctor);
    }
    //POST MAPPING para agregar muchos doctores a la vez
    @PostMapping("/createDoctors")
    public List<Doctor> createDoctors(@Valid @RequestBody List<Doctor> doctors) {
        return doctorService.saveAll(doctors);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
        // Verificar si el doctor con el ID proporcionado existe
        Optional<Doctor> existingDoctor = Optional.ofNullable(doctorService.findDoctorById(id));

        if (existingDoctor.isPresent()) {
            // Si existe, actualizar los datos del doctor
            doctor.setIdMedico(id); // Asegurarse de que el ID en el objeto coincida con el ID de la URL
            Doctor updatedDoctor = doctorService.saveDoctor(doctor);
            return ResponseEntity.ok(updatedDoctor); // Retornar la respuesta con el doctor actualizado
        } else {
            // Si no existe, retornar una respuesta 404 Not Found
            return ResponseEntity.notFound().build();
        }
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
