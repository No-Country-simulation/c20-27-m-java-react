package com.example.Healthtech.services;


import com.example.Healthtech.exception.UserInvalidException;
import com.example.Healthtech.models.User;
import com.example.Healthtech.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
   // private final Map<User, String> userRoles = new HashMap<>();

    @Autowired
    private UserRepository userRepository;

    public void createUser(User user) {
        if (user.getUserName() == null || user.getUserName().isEmpty()) {
            throw new UserInvalidException("Campo obligarotio");
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new UserInvalidException("Campo obligarotio");
        }
        userRepository.save(user);
    }
    public boolean login(String username, String password) {
        User user = userRepository.findByUserName(username);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User updateDataUser(Long id,User user) {
        userRepository.findById(id).orElseThrow();
        return userRepository.save(user);
    }
    public void deleteUser(Long id) {
        User user = getUserById(id);
        if(user != null){
            user.setDeleted(true);
            userRepository.save(user);
        }
    }
}
