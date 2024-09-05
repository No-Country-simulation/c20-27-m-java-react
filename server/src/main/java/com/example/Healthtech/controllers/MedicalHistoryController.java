package com.example.Healthtech.controllers;

import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.services.MedicalHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medical-histories")
public class MedicalHistoryController {

    @Autowired
    private MedicalHistoryService medicalHistoryService;

    @PostMapping
    public MedicalHistory createMedicalHistory(@RequestBody MedicalHistory medicalHistory) {
        return medicalHistoryService.createMedicalHistory(medicalHistory);
    }

    @GetMapping
    public List<MedicalHistory> getAllMedicalHistories() {
        return medicalHistoryService.getAllMedicalHistories();
    }

    @PutMapping("/{id}")
    public MedicalHistory updateMedicalHistory(@PathVariable Long id, @RequestBody MedicalHistory medicalHistory) {
        return medicalHistoryService.updateMedicalHistoryAndSavePrevious(id, medicalHistory);
    }
    // Endpoint para obtener todos los historiales médicos anteriores de un paciente
    @GetMapping("/patient/{patientId}")
    public List<MedicalHistory> getMedicalHistoriesByPatientId(@PathVariable Long patientId) {
        return medicalHistoryService.getMedicalHistoriesByPatientId(patientId);
    }


}
