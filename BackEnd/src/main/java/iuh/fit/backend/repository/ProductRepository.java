package iuh.fit.backend.repository;

import iuh.fit.backend.dto.response.ProductSummaryDTO;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.model.ProductStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,String>, JpaSpecificationExecutor<Product> {

    @Query(" select  p from Product p where p.status= 'ACTIVE' and p.deleted=false ")
    List<Product> findProductByStatusActive(PageRequest pageRequest);

}
