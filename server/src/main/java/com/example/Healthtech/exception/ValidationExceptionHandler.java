package com.example.Healthtech.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@ControllerAdvice
public class ValidationExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR) // manejo de datos duplicados
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<Map<String, String>> handleDuplicatedException(SQLIntegrityConstraintViolationException e) {
        Map<String, String> errors = new HashMap<>();
        errors.put("Error interno de datos", e.getMessage());
        return ResponseEntity.internalServerError().body(errors);
    }
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR) // manejo de datos faltantes
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Map<String, String>> NoSuchElement(NoSuchElementException e) {
        Map<String, String> errors = new HashMap<>();
        errors.put("Error", e.getMessage());
        return ResponseEntity.internalServerError().body(errors);
    }
}
