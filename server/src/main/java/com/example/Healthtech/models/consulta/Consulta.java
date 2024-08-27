package com.example.Healthtech.models.consulta;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import com.example.Healthtech.models.Patient;


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
    private Medico medico;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paciente_id")
    private Patient patient;

    private LocalDateTime fecha;

    private String videoLlamada;


}

/*

  CREATE TABLE consultas (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      medico_id BIGINT NOT NULL,
      paciente_id BIGINT NOT NULL,
      fecha TIMESTAMP NOT NULL,
      estatus ENUM('ACTIVA', 'CANCELADA', 'REPROGRAMADA') NOT NULL,
      enlace_video_llamada VARCHAR(255),

      FOREIGN KEY (medico_id) REFERENCES medicos(id),
      FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
  );
*/
