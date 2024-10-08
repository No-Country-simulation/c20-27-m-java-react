package com.example.Healthtech.controllers;

import com.example.Healthtech.models.MedicalHistory;
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

    /*@PostMapping("/create") // endpoint de paciente sin realcion con usuario
    public ResponseEntity<?> createPatient(@RequestBody Patient patient) {
        return ResponseEntity.ok().body(patientService.create(patient));
    }*/
    @PostMapping("/create/{user_id}")
    public ResponseEntity<Patient> createPatient(@RequestBody @Valid Patient patient, @PathVariable Long user_id) {
        return ResponseEntity.ok().body(patientService.createPatientWithUser(patient,user_id));
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
    @PostMapping("/{id}/medical-histories")
    public ResponseEntity<MedicalHistory> addMedicalHistory(@PathVariable Long id, @RequestBody MedicalHistory medicalHistory) {
        return ResponseEntity.ok(patientService.addMedicalHistory(id, medicalHistory));
    }

    @GetMapping("/{id}/medical-histories")
    public ResponseEntity<List<MedicalHistory>> getMedicalHistoriesByPatient(@PathVariable Long id) {
        return ResponseEntity.ok(patientService.getMedicalHistoriesByPatient(id));
    }
}
