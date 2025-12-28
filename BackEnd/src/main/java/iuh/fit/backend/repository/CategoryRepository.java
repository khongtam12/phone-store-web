package iuh.fit.backend.repository;

import iuh.fit.backend.dto.response.CategoryDTO;
import iuh.fit.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category,String> {
    List<Category> findAllByDeletedFalse(boolean deleted);
}
