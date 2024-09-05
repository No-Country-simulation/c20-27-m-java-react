package com.example.Healthtech.services;

import com.example.Healthtech.models.MedicalHistory;

import java.util.List;

public interface MedicalHistoryService {
    MedicalHistory createMedicalHistory(MedicalHistory medicalHistory);
    List<MedicalHistory> getAllMedicalHistories();

    MedicalHistory updateMedicalHistoryAndSavePrevious(Long id, MedicalHistory medicalHistory);
    public List<MedicalHistory> getMedicalHistoriesByPatientId(Long patientId);

}
