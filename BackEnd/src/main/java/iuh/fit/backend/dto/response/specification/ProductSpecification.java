package iuh.fit.backend.dto.response.specification;

import iuh.fit.backend.model.Product;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecification {
    public  static Specification<Product> hasBrand(String brandName){
        return (root, query, cb) ->
                brandName==null || brandName.isEmpty()
                ? null
                        : cb.equal(root.get("brand").get("name"),brandName);


    }
    public  static Specification<Product> hasCategory(String categoryName){
        return (root, query, cb) ->
                categoryName==null || categoryName.isEmpty()
                        ? null
                        : cb.equal(root.get("category").get("name"),categoryName);


    }
}
