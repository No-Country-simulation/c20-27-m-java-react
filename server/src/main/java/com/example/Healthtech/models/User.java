package com.example.Healthtech.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    @NotNull @Column(unique = true)
    private String userName;
    @NotNull @Column(unique = true)
    private String password;

    private boolean deleted = false;

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    /*@Override
    public int hashCode() {
        int result = 17;
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }*/
}
