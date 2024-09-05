package com.example.Healthtech.services;

import com.example.Healthtech.exception.ResourceNotFoundException;
import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.models.Patient;
import com.example.Healthtech.repositories.MedicalHistoryRepository;
import com.example.Healthtech.repositories.PatientRepository;
import com.example.Healthtech.services.MedicalHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicalHistoryServiceImpl implements MedicalHistoryService {

    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public MedicalHistory createMedicalHistory(MedicalHistory medicalHistory) {
        return medicalHistoryRepository.save(medicalHistory);
    }

    @Override
    public List<MedicalHistory> getAllMedicalHistories() {
        return medicalHistoryRepository.findAll();
    }

    @Override
    public MedicalHistory updateMedicalHistoryAndSavePrevious(Long id, MedicalHistory medicalHistory) {
        return null;
    }

    @Override
    public List<MedicalHistory> getMedicalHistoriesByPatientId(Long patientId) {
        return null;
    }


}
