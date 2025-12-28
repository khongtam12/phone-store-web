package iuh.fit.backend.repository;

import iuh.fit.backend.dto.response.PromotionDTO;
import iuh.fit.backend.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion,String> {
    List<Promotion> findAllByStatus(boolean status);
}
