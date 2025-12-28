package iuh.fit.backend.mapper;

import iuh.fit.backend.dto.response.PromotionDTO;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.model.Promotion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PromotionMapper {

    @Mapping(target = "productIds", source = "products")
PromotionDTO toPromotionDTO(Promotion promotion);

    default List<String> mapPromotionIds(List<Product> products) {
        if (products == null) {
            return null;
        }
        return products.stream().map(Product::getProductId).toList();
    }

}
