package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
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
@Table(name = "brands")
public class Brand {
    @Id
private String brandId;
private String slug;
private String logo;
private String description;
private String name;
private LocalDateTime createdAt;
private LocalDateTime updatedAt;
private LocalDateTime deletedDate;
private boolean deleted;
    @OneToMany(mappedBy = "brand")
    @ToString.Exclude
    @JsonManagedReference
private List<Product> products;

}
