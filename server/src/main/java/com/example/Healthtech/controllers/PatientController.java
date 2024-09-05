package com.example.Healthtech.controllers;

import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.models.Patient;
import com.example.Healthtech.services.MedicalHistoryService;
import com.example.Healthtech.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    PatientService patientService;
    @Autowired
    MedicalHistoryService medicalHistoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Patient>> getAll(){
        List<Patient> List = patientService.allPatients();
        return ResponseEntity.ok().body(List);
    }

    @GetMapping("/{patient_id}")
    public ResponseEntity<Patient> patientById(@PathVariable Long patient_id){
        return ResponseEntity.ok().body(patientService.searhPatientById(patient_id));
    }
    /*
    @PostMapping("/create")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient){
        patientService.create(patient);
        return ResponseEntity.ok().build();
    }

     */

    // refactorizar para el borrado logico
    @DeleteMapping("/delete/{id}")
    public void deletePatient(@PathVariable Long id){
        patientService.deletePatientById(id);
    }

    @PutMapping("/update/{id_patient}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long id_patient,@RequestBody Patient updatedPatient){
        return ResponseEntity.ok().body(patientService.updatePatientById(id_patient,updatedPatient));
    }
    // Crear un paciente con su historial médico
    @PostMapping
    public ResponseEntity<Patient> createPatientWithHistory(@RequestBody Patient patient) {
        Patient createdPatient = patientService.createPatientWithHistory(patient);
        return ResponseEntity.ok(createdPatient);
    }
    // Actualizar el historial médico de un paciente
    @PutMapping("/{id}/medical-history")
    public ResponseEntity<Patient> updatePatientMedicalHistory(@PathVariable Long id, @RequestBody MedicalHistory medicalHistory) {
        Patient updatedPatient = patientService.updatePatientMedicalHistory(id, medicalHistory);
        return ResponseEntity.ok(updatedPatient);
    }

}
