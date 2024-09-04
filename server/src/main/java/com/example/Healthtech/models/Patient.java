package com.example.Healthtech.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    private boolean deleted = false;


    public Patient(String name, String lastName, String email, String telephone, String address) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
    }
}
