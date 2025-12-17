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
@Table(name = "images")
public class Image {
    @Id
    private String imageId;
    private String imageUrl;
    private String alTex;
    private boolean isMain;
    private LocalDateTime uploadDate;
    @ManyToOne
    @JoinColumn(name = "productId")
    @JsonBackReference
    private Product product;
}
