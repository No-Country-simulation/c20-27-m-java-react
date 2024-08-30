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
    public Long id_patient;

    public String nombre;

    public String apellido;

    public String email;

    public String telefono;

    public String direccion;

    public Patient(String nombre, String email, String apellido, String telefono, String direccion) {
        this.nombre = nombre;
        this.email = email;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
