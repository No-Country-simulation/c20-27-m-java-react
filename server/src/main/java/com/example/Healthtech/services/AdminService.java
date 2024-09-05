package com.example.Healthtech.services;

import com.example.Healthtech.models.Admin;
import java.util.List;
import java.util.Optional;

public interface AdminService {
    List<Admin> findAll();
    Optional<Admin> findById(Long id);
    Admin save(Admin admin);
    void deleteById(Long id);
    Admin getAdminById(Long id);

    List<Admin> saveAll(List<Admin> admins);
    void deleteAdmin(Long id);
    List<Admin> getDeletedAdmins(); // Método para obtener los admins eliminados
    void restoreAdmin(Long id); // Método para restaurar un admin eliminado
}
