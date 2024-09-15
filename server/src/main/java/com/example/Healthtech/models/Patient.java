package com.example.Healthtech.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patient_id;

    @NotNull
    private String name;
    @NotNull
    private String lastName;

    @NotNull @Email @Column(unique = true)
    private String email;

    @NotNull
    private String telephone;
    @NotNull
    private String address;

    // Relación uno a muchos con la entidad MedicalHistory
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore // Se ñade esta anotación para evitar la serialización recursiva
    private List<MedicalHistory> medicalHistories;

    //Relacion con usuario
    @OneToOne
    @JoinColumn(name = "user")
    private User userName;

    private boolean deleted = false;

    public Patient(String name, String lastName, String email, String telephone, String address) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
    }
}
