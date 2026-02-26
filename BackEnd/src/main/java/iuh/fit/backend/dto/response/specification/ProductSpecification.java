package iuh.fit.backend.dto.response.specification;

import iuh.fit.backend.model.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

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
    public static Specification<Product> priceBetween(Double minPrice, Double maxPrice){
        return (root, query, cb) ->{
            if(minPrice ==null && maxPrice==null) return  null;
            if(minPrice ==null) return cb.lessThanOrEqualTo(root.join("variants").get("price"),maxPrice);
            if(maxPrice == null) return cb.greaterThanOrEqualTo(root.join("variants").get("price"),minPrice);
            return  cb.between(root.join("variants").get("price"),minPrice,maxPrice);
        };
    }
    public static Specification<Product> hasStorages(List<String> storages)
    {
        return (root, query, cb) -> {
            if(storages==null || storages.isEmpty()) return  null;
            return root.join("variants").get("storage").in(storages);
        };
    }
    public static Specification<Product> stockReady(boolean isStockReady){
        return (root, query, cb) -> {
            if (isStockReady)
                return cb.greaterThan(root.join("variants").get("stockQuantity"),0);
       return null;
        };
    }
}
