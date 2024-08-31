package com.example.Healthtech.repositories;

import com.example.Healthtech.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    @Query("SELECT p FROM Patient p WHERE p.deleted = false")
    List<Patient> findAllActive();

    @Query("SELECT p FROM Patient p WHERE p.id = :id AND p.deleted = false")
    Patient findByIdAndNotDeleted(@Param("id") Long id);

    @Query("SELECT p FROM Patient p WHERE p.deleted = true")
    List<Patient> findAllDeleted();
}
