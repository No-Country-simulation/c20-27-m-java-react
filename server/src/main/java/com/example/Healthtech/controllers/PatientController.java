package com.example.Healthtech.controllers;

import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.models.Patient;
import com.example.Healthtech.services.MedicalHistoryService;
import com.example.Healthtech.services.PatientService;
import com.example.Healthtech.services.PatientServiceImpl;
import jakarta.validation.Valid;
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
<<<<<<< HEAD
    private PatientService patientService;
=======
    PatientService patientService;
    @Autowired
    MedicalHistoryService medicalHistoryService;
>>>>>>> 5082bc5364907be6cf9487ad5ba58961ebbc20b5

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
<<<<<<< HEAD

    // borrado fisico
    /*@DeleteMapping("/delete/{id}")
=======
    /*
    @PostMapping("/create")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient){
        patientService.create(patient);
        return ResponseEntity.ok().build();
    }

     */

    // refactorizar para el borrado logico
    @DeleteMapping("/delete/{id}")
>>>>>>> 5082bc5364907be6cf9487ad5ba58961ebbc20b5
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
