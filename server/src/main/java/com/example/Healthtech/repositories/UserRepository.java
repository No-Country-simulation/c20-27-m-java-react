package com.example.Healthtech.repositories;

import com.example.Healthtech.models.User;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserName(@NotNull String userName);
    User findByPassword(@NotNull String password);

}
