package com.nocountry.health_tech.controllers;
import com.nocountry.health_tech.models.Admin;
import com.nocountry.health_tech.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        Optional<Admin> admin = adminService.findById(id);
        return admin.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/createadmin")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.save(admin);
    }

    @PostMapping("/createadmins")
    public List<Admin> createAdmins(@RequestBody List<Admin> admins) {
        return adminService.saveAll(admins);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin adminDetails) {
        Optional<Admin> admin = adminService.findById(id);
        if (admin.isPresent()) {
            Admin updatedAdmin = admin.get();
            updatedAdmin.setNombre(adminDetails.getNombre());
            updatedAdmin.setApellido(adminDetails.getApellido());
            updatedAdmin.setEmail(adminDetails.getEmail());
            updatedAdmin.setTelefono(adminDetails.getTelefono());
            return ResponseEntity.ok(adminService.save(updatedAdmin));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        if (adminService.findById(id).isPresent()) {
            adminService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    //Para implmenetar mas adelante cuando esten las entidades faltantes
    /*
    @PostMapping("/{id}/citas")
    public ResponseEntity<Cita> gestionarCita(@PathVariable Long id, @RequestBody Cita cita) {
        Optional<Admin> admin = adminService.findById(id);
        if (admin.isPresent()) {
            cita.setAdminId(id); // Asocia la cita con el administrador
            Cita nuevaCita = citaService.save(cita);
            return ResponseEntity.ok(nuevaCita);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
      @PutMapping("/{id}/citas/{citaId}/medico/{medicoId}")
    public ResponseEntity<Cita> asignarMedicoACita(@PathVariable Long id, @PathVariable Long citaId, @PathVariable Long medicoId) {
        Optional<Admin> admin = adminService.findById(id);
        if (admin.isPresent()) {
            Optional<Cita> updatedCita = citaService.assignMedicoToCita(citaId, medicoId);
            return updatedCita.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
     */
}
