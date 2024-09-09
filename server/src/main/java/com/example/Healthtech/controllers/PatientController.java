package com.example.Healthtech.controllers;

import com.example.Healthtech.models.Patient;
import com.example.Healthtech.services.PatientService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<List<Patient>> getAll(){
        List<Patient> List = patientService.allPatients();
        return ResponseEntity.ok().body(List);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPatient(@RequestBody Patient patient) {
        return ResponseEntity.ok().body(patientService.create(patient));
    }

    @GetMapping("/{patient_id}")
    public ResponseEntity<Patient> patientById(@PathVariable Long patient_id){
        return ResponseEntity.ok().body(patientService.searchPatientById(patient_id));
    }

    // borrado fisico
    /*@DeleteMapping("/delete/{id}")
    public void deletePatient(@PathVariable Long id){
        patientService.deletePatientById(id);
    }*/

    @DeleteMapping("/delete/{patient_id}")
    public void deletePatient(@PathVariable Long patient_id){
        patientService.deletePatient(patient_id);
    }

    @GetMapping("/deleted")
    public List<Patient> getDeletedPatients(){
        return patientService.getDeletedPatients();
    }

    @PutMapping("/restore/{patient_id}")
    public void restorePatient(@PathVariable Long patient_id){
        patientService.restorePatient(patient_id);
    }

    @PutMapping("/update/{patient_id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long patient_id,@RequestBody @Valid Patient updatedPatient){
        return ResponseEntity.ok().body(patientService.updatePatientById(patient_id,updatedPatient));
    }
}
