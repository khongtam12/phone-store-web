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
@Table(name = "products")
public class Product {
    @Id
    private String productId;
    private String name;
    private int warrantyMonths;
    private LocalDateTime  createdDate;
    private LocalDateTime  updatedDate;
    private LocalDateTime  deletedDate;
    private String slug;
    private boolean deleted;
    @OneToMany(mappedBy = "product")
    @JsonManagedReference
    @ToString.Exclude
    private List<Image> images;
    @OneToMany(mappedBy = "product")
    @JsonManagedReference
    @ToString.Exclude
    private List<ProductVariant> variants;
    @Enumerated(EnumType.STRING)
    private ProductStatus status;

    @OneToMany(mappedBy = "product")
    @ToString.Exclude
    @JsonManagedReference
    private List<Review> reviews;

}
