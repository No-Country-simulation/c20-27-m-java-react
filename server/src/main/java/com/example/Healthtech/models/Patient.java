package com.example.Healthtech.models;

import jakarta.persistence.*;
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

   

    private Long id_patient;


    private String name;

    private String lastName;

    private String email;

    private String telephone;

    private String address;

    public Patient(String name,  String lastName, String email, String telephone, String address) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
    }
}
