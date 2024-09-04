package com.example.Healthtech.models.appointment;

import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.models.Patient;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table(name = "appointments")
@Entity(name = "appointment")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private LocalDateTime dateTime;

    private String videoCallLink;

    @Column(columnDefinition = "TINYINT(1)")
    private Boolean active;

    // Constructor
    public Appointment(Long id, Doctor doctor, Patient patient, LocalDateTime dateTime, String videoCallLink) {
        this.id = id;
        this.doctor = doctor;
        this.patient = patient;
        this.dateTime = dateTime;
        this.videoCallLink = videoCallLink;
        this.active = true;
    }

    public void deactivate() {
        this.active = false;
    }
}
