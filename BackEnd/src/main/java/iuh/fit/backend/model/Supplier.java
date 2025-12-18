package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "suppliers")
public class Supplier {
    @Id
    private String supplierId;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String contactPerson;
    private boolean status;
    private boolean deleted;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private LocalDateTime deletedDate;
    @OneToMany(mappedBy = "supplier")
    @JsonManagedReference
    @ToString.Exclude
    private List<Product> products;
}
