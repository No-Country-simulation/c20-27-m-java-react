package com.example.Healthtech.models;

import jakarta.persistence.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
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
    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;
    @NotBlank(message = "El apellido es obligatorio")
    private String apellido;
    @NotBlank(message = "La especialidad es obligatoria")
    private String especialidad;
    @Email(message = "Debe ser una dirección de correo válida")
    @NotBlank(message = "El email es obligatorio")
    private String email;
    @NotBlank(message = "El teléfono es obligatorio")
    private String telefono;
    private boolean deleted = false; // Campo para el borrado lógico



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