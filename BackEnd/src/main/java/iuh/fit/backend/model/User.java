package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    private String userId;
    private String email;
    private String phone;
    private String fullName;
    private LocalDate dateOfBirth;
    private String gender;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    @JsonManagedReference
    private List<Address> addresss;

    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    @JsonManagedReference
    private List<Invoice> invoices;
    @OneToOne(mappedBy = "user")
    @JsonBackReference
    private Cart cart;
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    @JsonManagedReference
    private List<Review> reviews;


}
