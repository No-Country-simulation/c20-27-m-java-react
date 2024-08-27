
package com.example.Healthtech.services;

import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    @Override
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
   /*
    @Override
    public List<Doctor> consultAppointments(Long doctorId) {
        Doctor doctor = getDoctorById(doctorId);
        return doctor != null ? doctor.consultAppointments() : null;
    }

    @Override
    public void accessPatientMedicalRecord(Long doctorId, Long patientId) {
        Doctor doctor = getDoctorById(doctorId);
        if (doctor != null) {
            doctor.accessMedicalRecord(patientId);
        }
    }

    */
}
