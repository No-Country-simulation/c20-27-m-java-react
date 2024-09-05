package com.example.Healthtech.repositories;

import com.example.Healthtech.models.MedicalHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, Long> {
    // Puedes agregar consultas personalizadas aquí si es necesario
}
