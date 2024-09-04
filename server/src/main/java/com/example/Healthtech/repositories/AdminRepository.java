package com.example.Healthtech.repositories;

import com.example.Healthtech.models.Admin;

import com.example.Healthtech.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    @Query("SELECT a FROM Admin a WHERE a.deleted = false")
    List<Admin> findAllActive(); // Método para obtener todos los doctores no eliminados

    @Query("SELECT a FROM Admin a WHERE a.idAdmin = :id AND a.deleted = false")
    Admin findByIdAndNotDeleted(@Param("id") Long id); // Método para obtener un doctor por ID que no esté eliminado

    @Query("SELECT a FROM Admin a WHERE a.deleted = true")
    List<Admin> findAllDeleted(); // Método para consultar doctores eliminados
}
