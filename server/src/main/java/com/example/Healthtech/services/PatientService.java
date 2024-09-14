package com.example.Healthtech.services;

import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.models.Patient;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PatientService {

    List<Patient> allPatients();
    Patient searchPatientById(Long patient_id);
    void deletePatient(Long id);
    void deletePatientById(Long id); //para el borrado directo
    List<Patient> getDeletedPatients();
    void restorePatient(Long id);
    //List<Patient> saveAllPatients(List<Patient> patients);
    Patient updatePatientById(Long id_patient, Patient updatedPatient);
    //ResponseEntity<?> create(Patient patient); //creador de paciente
    MedicalHistory addMedicalHistory(Long patientId, MedicalHistory medicalHistory);
    List<MedicalHistory> getMedicalHistoriesByPatient(Long patientId);
    Patient createPatientWithUser(@Valid Patient patient, Long userId);
}
