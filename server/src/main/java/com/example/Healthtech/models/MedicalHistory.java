package com.example.Healthtech.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_medical_history")
    private Long idMedicalHistory;

    private LocalDate consultationDate;
    private String note;
    private String observation;
    private String medicalTreatment;
    private boolean deleted = false;

    @PrePersist
    protected void onCreate() {
        this.consultationDate = LocalDate.now();
    }
}
