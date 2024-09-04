package com.example.Healthtech.services;
import com.example.Healthtech.models.Admin;
import com.example.Healthtech.models.Doctor;
import com.example.Healthtech.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public List<Admin> findAll() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<Admin> findById(Long id) {
        return adminRepository.findById(id);
    }

    @Override
    public Admin save(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public void deleteById(Long id) {
        adminRepository.deleteById(id);
    }

    @Override
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    @Override
    public List<Admin> saveAll(List<Admin> admins) {
        return adminRepository.saveAll(admins);
    }

    @Override
    public void deleteAdmin(Long id) {
        Admin admin = getAdminById(id);
        if (admin != null) {
            admin.setDeleted(true); // Marcar el admin como eliminado
            adminRepository.save(admin); // Guardar el cambio
        }
    }

    @Override
    public List<Admin> getDeletedAdmins() {
        return adminRepository.findAllDeleted(); // Obtener todos los admins eliminados
    }

    @Override
    public void restoreAdmin(Long id) {
        Admin admin = adminRepository.findById(id).orElse(null);
        if (admin != null && admin.isDeleted()) {
            admin.setDeleted(false); // Restaurar el admin eliminado
            adminRepository.save(admin); // Guardar el cambio
        }
    }
    }


