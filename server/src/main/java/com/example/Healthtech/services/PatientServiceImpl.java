package com.example.Healthtech.services;

import com.example.Healthtech.infra.errors.UserInvalidException;
import com.example.Healthtech.models.Patient;
import com.example.Healthtech.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    PatientRepository patientRepository;

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
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Ha ocurrido un error inesperado.");
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
        return patientRepository.findById(patient_id).get();
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
                .orElseThrow(()-> new RuntimeException("Patient not found"));
    }
}
