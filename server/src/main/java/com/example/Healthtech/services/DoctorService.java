package com.example.Healthtech.services;


import com.example.Healthtech.models.Doctor;

import java.util.List;

public interface DoctorService {
    List<Doctor> getAllDoctors();
    Doctor getDoctorById(Long id);
    Doctor saveDoctor(Doctor doctor);
    //void deleteDoctor(Long id); Delete fisico
    /*List<Doctor> consultAppointments(Long doctorId);
    void accessPatientMedicalRecord(Long doctorId, Long patientId);

     */
    void deleteDoctor(Long id);
    List<Doctor> getDeletedDoctors(); // Método para obtener los doctores eliminados
    void restoreDoctor(Long id); // Método para restaurar un doctor eliminado
}
