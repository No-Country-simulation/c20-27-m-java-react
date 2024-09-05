package com.example.Healthtech.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastName;
    private String email;
    private String telephone;
    private String address;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")  // Vincula a MedicalHistory a través de la clave foránea patient_id
    private List<MedicalHistory> medicalHistories = new ArrayList<>();

    public Patient(String name, String lastName, String email, String telephone, String address) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
    }

    // Método para agregar un historial médico
    public void addMedicalHistory(MedicalHistory medicalHistory) {
        this.medicalHistories.add(medicalHistory);
    }
}
