package com.example.Healthtech.services;

import com.example.Healthtech.models.Patient;
import com.example.Healthtech.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;

    public List<Patient> allPatients() {
        return patientRepository.findAll();
    }

    public void create(Patient patient) {

        patientRepository.save(patient);
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
                    patient.setNombre(updatedPatient.getNombre());
                    patient.setApellido(updatedPatient.getApellido());
                    patient.setEmail(updatedPatient.getEmail());
                    patient.setTelefono(updatedPatient.getTelefono());
                    patient.setDireccion(updatedPatient.getDireccion());
                    return patientRepository.save(patient);
                })
                .orElseThrow(()-> new RuntimeException("Patient not found"));
    }
}
