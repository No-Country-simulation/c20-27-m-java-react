package com.example.Healthtech.services;


import com.example.Healthtech.models.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    List<Admin> findAll();
    Optional<Admin> findById(Long id);
    Admin save(Admin admin);
    void deleteById(Long id);
    List<Admin> saveAll(List<Admin> admins);
}
