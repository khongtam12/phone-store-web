package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "invoice_details")
@IdClass(InvoiceDetail.InvoiceDetailId.class)
public class InvoiceDetail {

    private int quantity;
    private double price;
    private double discount;
    @Id
    @ManyToOne
    @JoinColumn(name = "invoiceId")
    @JsonBackReference
    private Invoice invoice;
    @Id
    @ManyToOne
    @JoinColumn(name = "variantId")
    @JsonBackReference
    private ProductVariant productVariant;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class InvoiceDetailId implements Serializable{
        private String invoice;
        private String productVariant;
    }


}
