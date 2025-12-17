package iuh.fit.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "roles")
public class Role {
    @Id
    private  String roleId;
    private  String roleName;
    private String description;
    @OneToMany(mappedBy = "role")
    @ToString.Exclude
    @JsonManagedReference
    private List<Account> accounts;
}
