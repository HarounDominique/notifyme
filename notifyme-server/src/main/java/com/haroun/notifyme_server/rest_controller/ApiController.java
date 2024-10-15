package com.haroun.notifyme_server.rest_controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/hello")
    public String hello() {
        return "Hola desde Spring Boot!";
    }

    // Puedes agregar más métodos para manejar otras solicitudes (POST, PUT, DELETE, etc.)
}