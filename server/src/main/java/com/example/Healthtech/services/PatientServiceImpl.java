package com.example.Healthtech.services;

import com.example.Healthtech.exception.ResourceNotFoundException;
import com.example.Healthtech.exception.UserInvalidException;
import com.example.Healthtech.models.MedicalHistory;
import com.example.Healthtech.models.Patient;
import com.example.Healthtech.models.User;
import com.example.Healthtech.repositories.MedicalHistoryRepository;
import com.example.Healthtech.repositories.PatientRepository;
import com.example.Healthtech.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    PatientRepository patientRepository;
    @Autowired
    MedicalHistoryRepository medicalHistoryRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Patient> allPatients() {
        return patientRepository.findAll();
    }

    public ResponseEntity<?> create(Patient patient) {
        try {
            validatePatient(patient); //valido los datos
            patientRepository.save(patient);//guardo el paciente
            return ResponseEntity.ok("El perfil Paciente ha sido creado con éxito.");
        } catch (UserInvalidException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    //metodo para crear con relacion a user
    public Patient createPatientWithUser(Patient patient, Long userId) {
        try {
            User user = userRepository.findById(userId).get();
            patient.setUserName(user);
            return patientRepository.save(patient);
        } catch (Exception e) {
            throw new RuntimeException("Error al crear el paciente.", e);
        }
    }

    //metodo interno de validacion de atributos de paciente
    private void validatePatient(Patient patient) {
        if (patient.getName() == null || patient.getName().isEmpty()) {
            throw new UserInvalidException("El nombre es obligatorio");
        }
        if (patient.getLastName() == null || patient.getLastName().isEmpty()) {
            throw new UserInvalidException("El apellido es obligatorio");
        }
        if (patient.getEmail() == null || patient.getEmail().isEmpty()) {
            throw new UserInvalidException("El email es obligatorio");
        }
        if (patient.getTelephone() == null || patient.getTelephone().isEmpty()) {
            throw new UserInvalidException("El teléfono es obligatorio");
        }
        if (patient.getAddress() == null || patient.getAddress().isEmpty()) {
            throw new UserInvalidException("La dirección es obligatoria");
        }
    }

    @Override
    public Patient searchPatientById(Long patient_id) {
            return patientRepository.findById(patient_id).orElseThrow();
    }

    //borrado fisico
    @Override
    public void deletePatientById(Long patient_id) {
        patientRepository.findById(patient_id)
                .ifPresent(patientRepository::delete);
    }

    @Override
    public void deletePatient(Long id) {
        Patient patient = searchPatientById(id);
        if(patient != null){
            patient.setDeleted(true);
            patientRepository.save(patient);
        }
    }
    @Override
    public List<Patient> getDeletedPatients() {
        return patientRepository.findAllDeleted();
    }

    @Override
    public void restorePatient(Long id) {
        Patient patient = patientRepository.findById(id).orElse(null);
        assert patient != null;
        if(patient.isDeleted()){
            patient.setDeleted(false);
            patientRepository.save(patient);
        }
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
                .orElseThrow();
    }
    @Override
    public MedicalHistory addMedicalHistory(Long patientId, MedicalHistory medicalHistory) {
        // Busca al paciente por ID
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Paciente no encontrado con el ID: " + patientId));

        // Asocia el historial médico al paciente encontrado
        medicalHistory.setPatient(patient);

        // Guarda el historial médico en la base de datos
        return medicalHistoryRepository.save(medicalHistory);
    }

    @Override
    public List<MedicalHistory> getMedicalHistoriesByPatient(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
        return patient.getMedicalHistories();
    }
}
