package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "descriptions")
public class Description {
    @Id
    private String id;
    private String name;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String value;
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private DescriptionType type;

    @ManyToOne
    @JoinColumn(name = "productId")
    @JsonBackReference
    private Product product;

}
