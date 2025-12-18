package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "comments")
public class Comment {
    @Id
    private String commentId;
    private String content;
    private LocalDateTime createdDate;
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User user;
    @ManyToOne
    @JoinColumn(name = "productId")
    @JsonBackReference
    private Product product;

    @ManyToOne
    @JoinColumn(name = "parentId")
    @JsonBackReference
    private Comment parent;

    @OneToMany(mappedBy = "parent")
    @JsonManagedReference
    @ToString.Exclude
    private List<Comment> replies;

}
