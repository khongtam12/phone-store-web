package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "accounts")
public class Account {
    @Id
    private String accountId;
    private String username;
    private String password;
    private boolean status;
    private LocalDateTime createdDate;

    private LocalDateTime lastLogin;
    private String provider;
    private String providerId;
    private String avatarUrl;
    private String email;
    private String fullName;
    @ManyToOne
    @JoinColumn(name = "roleId")
    @JsonBackReference
    private Role role;


}
