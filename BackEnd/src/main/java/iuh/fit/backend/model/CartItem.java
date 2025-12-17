package iuh.fit.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart_items")
@IdClass(CartItem.CartItemId.class)
public class CartItem {
    private int quantity;
    @Id
    @ManyToOne
    @JoinColumn(name = "cartId")
    private Cart cart;
    @Id
    @ManyToOne
    @JoinColumn(name = "variantId")
    private ProductVariant productVariant;
    public double getTotal(){
        return quantity*productVariant.getPrice();
    }
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CartItemId implements Serializable {
        private String cart;
        private String productVariant;
    }
}
