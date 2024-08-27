package com.example.Healthtech.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMedico;

    private String nombre;
    private String apellido;
    private String especialidad;
    private String email;
    private String telefono;


    /*@OneToMany(mappedBy = "medico")
    private List<Cita> citas;*/
    /*
    public List<Cita> consultarCitas() {
        return citas;
    }
    */
    /*
    public void accederHistorial(Long idPaciente) {
        // Aca va la lógica para acceder al historial médico del paciente
    }
    */

}