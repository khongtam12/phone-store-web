package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product_variants")
public class ProductVariant {
    @Id
    private String variantId;
    private String storage;
    private int stockQuantity;
    private double price;
    private String imageUrl;
    private String color;
    @ManyToOne
    @JoinColumn(name = "productId")
    @JsonBackReference
    private Product product;
    @OneToMany(mappedBy = "productVariant")
    private List<CartItem> cartItems;
}
