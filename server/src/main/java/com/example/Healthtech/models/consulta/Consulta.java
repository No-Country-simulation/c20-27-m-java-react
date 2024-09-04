package com.example.Healthtech.models.consulta;

import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.models.Patient;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Table(name = "consultas")
@Entity(name = "consulta")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medico_id")
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private LocalDateTime fecha;

    private String videoLlamada;

    @Column(columnDefinition = "TINYINT(1)")
    private Boolean activo;

    // Constructor
    public Consulta(Long id, Doctor doctor, Patient patient, LocalDateTime fecha, String videoLlamada) {
        this.id = id;
        this.doctor = doctor;
        this.patient = patient;
        this.fecha = fecha;
        this.videoLlamada = videoLlamada;
    }


    public void eliminar() {
        this.activo = false;
    }
}

/*
CREATE TABLE consultas (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        medico_id BIGINT NOT NULL,
        patient_id BIGINT NOT NULL,
        fecha TIMESTAMP NOT NULL,
        videoLlamada VARCHAR(255),
activo TINYINT(1) DEFAULT 1,  -- 1 representa 'true' (activo), 0 representa 'false' (inactivo)
FOREIGN KEY (medico_id) REFERENCES medicos(id),
FOREIGN KEY (patient_id) REFERENCES pacientes(id)
        );
*/