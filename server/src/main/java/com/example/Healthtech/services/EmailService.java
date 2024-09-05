package com.example.Healthtech.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendNotification(String recipientEmail, String videoCallLink, LocalDateTime dataTime) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("Cita programada");
        message.setText("Tiene una cita programada para el día: " + dataTime + ".\n\n" +
                "Enlace para la videollamada:\n " + videoCallLink + "\n\nSaludos." );

        emailSender.send(message);
    }
}
