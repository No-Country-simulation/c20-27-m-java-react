package com.example.Healthtech.services;

import com.example.Healthtech.models.Patient;
import com.example.Healthtech.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    /*public void create(Patient patient) {
        patientRepository.save(patient);
    }*/

    public Patient create(Patient patient) {
        try {
            return patientRepository.save(patient);
        } catch (Exception e) {
            throw new RuntimeException("Failed to create patient", e);
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

    /*@Override
    public List<Patient> saveAllPatients(List<Patient> patients) {
        List<Patient> patientList = patientRepository.findAll();
        return patientRepository.saveAll(patientList);
    }*/

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
