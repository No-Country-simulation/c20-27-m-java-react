package com.example.Healthtech.infra.errors;

public class ValidarIntegridad extends RuntimeException{
    public ValidarIntegridad(String s){
        super(s);
    }
}
