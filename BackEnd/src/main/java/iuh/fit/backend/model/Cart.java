package iuh.fit.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "carts")
public class Cart {
    @Id
    private String cartId;
    private LocalDateTime createdDate;
    private String status;
    @OneToOne
    @JoinColumn(name = "userId")
    private User user;
}
