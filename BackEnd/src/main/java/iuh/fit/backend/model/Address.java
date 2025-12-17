package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "addresss")
public class Address {
    @Id
    private String addressId;
    private String city;
    private String street;
    private String ward;
    private boolean isDefault;
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User user;
}
