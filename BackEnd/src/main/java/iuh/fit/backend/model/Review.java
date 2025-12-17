package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reviews")
public class Review {
    @Id
    private String reviewId;
    private int rating;
    private String comment;
    private LocalDateTime date;
    private String title;
    @ElementCollection
    @CollectionTable(name = "review_images", joinColumns = @JoinColumn(name = "reviewId"))
    @Column(name = "url")
    private List<String> imageUrls= new ArrayList<>();;
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User user;
    @ManyToOne
    @JoinColumn(name = "productId")
    @JsonBackReference
    private Product product;

}
