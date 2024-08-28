package com.example.Healthtech.repositories;


import com.example.Healthtech.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    @Query("SELECT d FROM Doctor d WHERE d.deleted = false")
    List<Doctor> findAllActive(); // Método para obtener todos los doctores no eliminados

    @Query("SELECT d FROM Doctor d WHERE d.id = :id AND d.deleted = false")
    Doctor findByIdAndNotDeleted(@Param("id") Long id); // Método para obtener un doctor por ID que no esté eliminado

    @Query("SELECT d FROM Doctor d WHERE d.deleted = true")
    List<Doctor> findAllDeleted(); // Método para consultar doctores eliminados
}