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
@Table(name = "invoices")
public class Invoice {
    @Id
    private String invoiceId;
    private LocalDateTime date;
    private double total;
    private String shippingAddress;
    private String paymentMethod;
    private String note;
    @Enumerated(EnumType.STRING)
    private StatusInvoice status;
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User user;
}
