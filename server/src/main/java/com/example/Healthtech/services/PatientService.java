package com.example.Healthtech.services;

import com.example.Healthtech.models.Patient;

import java.util.List;

public interface PatientService {

    List<Patient> allPatients();
    Patient searchPatientById(Long patient_id);

    //borrado fisico
    void deletePatientById(Long patient_id);

    void deletePatient(Long id);
    //void deletePatientById(Long id); //para el borrado directo
    List<Patient> getDeletedPatients();
    void restorePatient(Long id);
    //List<Patient> saveAllPatients(List<Patient> patients);
    Patient updatePatientById(Long patient_id, Patient updatedPatient);
    Patient create(Patient patient);
}
