package com.example.Healthtech.services;

import com.example.Healthtech.exception.ResourceNotFoundException;
import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.models.Patient;
<<<<<<< HEAD
import org.springframework.http.ResponseEntity;
=======
import com.example.Healthtech.repositories.MedicalHistoryRepository;
import com.example.Healthtech.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
>>>>>>> 5082bc5364907be6cf9487ad5ba58961ebbc20b5

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface PatientService {

    List<Patient> allPatients();
    Patient searchPatientById(Long patient_id);
    void deletePatient(Long id);
    void deletePatientById(Long id); //para el borrado directo
    List<Patient> getDeletedPatients();
    void restorePatient(Long id);
    //List<Patient> saveAllPatients(List<Patient> patients);
    Patient updatePatientById(Long id_patient, Patient updatedPatient);

<<<<<<< HEAD
    ResponseEntity<?> create(Patient patient);
=======
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;


    public List<Patient> allPatients() {
        return patientRepository.findAll();
    }

    // Crear un paciente junto con su historial médico
    public Patient createPatientWithHistory(Patient patient) {
        if (patient.getMedicalHistories() != null) {
            for (MedicalHistory history : patient.getMedicalHistories()) {
                history.setConsultationDate(java.time.LocalDate.now()); // O asignar cualquier otra lógica necesaria
            }
        }
        return patientRepository.save(patient);
    }
    public Patient searhPatientById(Long patient_id) {
        return patientRepository.findById(patient_id).get();
    }

    public void deletePatientById(Long patient_id) {
        patientRepository.findById(patient_id)
                .ifPresent(patientRepository::delete);
    }

    public Patient updatePatientById(Long id_patient, Patient updatedPatient) {
        return patientRepository.findById(id_patient)
                .map(patient -> {
                    patient.setName(updatedPatient.getName());
                    patient.setLastName(updatedPatient.getLastName());
                    patient.setEmail(updatedPatient.getEmail());
                    patient.setTelephone(updatedPatient.getTelephone());
                    patient.setAddress(updatedPatient.getAddress());
                    return patientRepository.save(patient);
                })
                .orElseThrow(()-> new RuntimeException("Patient not found"));
    }
    // Actualizar un paciente y su historial médico
    public Patient updatePatientMedicalHistory(Long patientId, MedicalHistory newHistory) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            patient.addMedicalHistory(newHistory);  // Agregar el nuevo historial
            return patientRepository.save(patient);
        } else {
            throw new RuntimeException("Patient not found");
        }
    }


>>>>>>> 5082bc5364907be6cf9487ad5ba58961ebbc20b5
}
