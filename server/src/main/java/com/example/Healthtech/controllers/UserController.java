package com.example.Healthtech.controllers;

import com.example.Healthtech.models.LoginRequest;
import com.example.Healthtech.models.User;
import com.example.Healthtech.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.findAll();
    }

    @PostMapping("/create") //creo el usuario
    public void create(@RequestBody User user) {
        userService.createUser(user);
    }
    @PostMapping ("/login") //verifica si los datos que se ingresan, ya estan registrados
    public boolean login(@RequestBody LoginRequest request) {
        return userService.login(request.getUserName(), request.getPassword());
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id){
        return userService.getUserById(id);
    }
    @PutMapping("/update")
    public User updateUserData(@PathVariable Long id, @RequestBody User user){
        user.setUserId(id);
        return userService.updateDataUser(id, user);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
