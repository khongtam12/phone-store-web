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
@Table(name = "promotions")
public class Promotion {
    @Id
    private String promotionId;
    private String name;
    private double discountPercent;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String description;
    private boolean status;
    @OneToMany(mappedBy = "promotion")
    @JsonManagedReference
    @ToString.Exclude
    private List<Product> products;
}
