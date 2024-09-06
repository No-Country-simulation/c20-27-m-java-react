package com.example.Healthtech.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");

    public void sendNotification(String recipientEmail, String videoCallLink, LocalDateTime dateTime, String participantName) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("Confirmación de Cita Agendada");

        // Formatear la fecha
        String formattedDateTime = dateTime.format(DATE_TIME_FORMATTER);

        message.setText("Hola " + participantName + ",\n\n" +
                "Tiene una cita programada para el  " + formattedDateTime + " hrs.\n\n\n" +
                "Enlace para la videollamada:\n\n " + videoCallLink + "\n\n\nSaludos." );

        emailSender.send(message);
    }}
