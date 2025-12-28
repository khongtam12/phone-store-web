package iuh.fit.backend.repository;

import io.micrometer.common.KeyValues;
import iuh.fit.backend.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<Brand,String> {
    List<Brand> findAllByDeletedFalse(boolean deleted);
}
