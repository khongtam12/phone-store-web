package iuh.fit.backend.mapper;

import iuh.fit.backend.dto.response.ProductSummaryDTO;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.model.ProductVariant;
import iuh.fit.backend.model.Promotion;
import org.mapstruct.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;


@Mapper(componentModel = "spring")
public interface ProductMapper {
@Mapping(source = "productId", target = "id")
@Mapping( target = "link",expression = "java(\"product/\"+product.getProductId())")
@Mapping(source = "variants", target = "image",qualifiedByName = "getFirstVariantImage")
@Mapping(source = "variants", target = "thumbnailUrl",qualifiedByName = "getFirstVariantImage")
@Mapping(source = "name", target = "name")
@Mapping(source = "brand.name", target = "brandName")
@Mapping(source = "category.name", target = "categoryName")
@Mapping(source = "variants", target = "totalStock",qualifiedByName = "calculateTotalStock")
@Mapping(source = "status", target = "status")
@Mapping( target = "price",ignore = true)
@Mapping(source = "variants", target = "oldPrice",qualifiedByName = "getFirstVariantPrice")
@Mapping(source = "promotion", target = "discountPercent",qualifiedByName = "getDiscountPercent")
ProductSummaryDTO toProductSummaryDTO(Product product);
@AfterMapping
default  void caculateFinalPrice(@MappingTarget ProductSummaryDTO dto){
    if(dto.getOldPrice() == null ||dto.getOldPrice().compareTo(BigDecimal.ZERO)==0){
        dto.setOldPrice(BigDecimal.ZERO);
        return;
    }
    if(dto.getDiscountPercent()<=0){
        dto.setPrice(dto.getOldPrice());
        return;
    }
    BigDecimal discountPercent = BigDecimal.valueOf(dto.getDiscountPercent());
    BigDecimal discounAmount=dto.getOldPrice().multiply(discountPercent);
    BigDecimal newPrice=discounAmount.add(discountPercent);
    dto.setPrice(newPrice.setScale(-3, RoundingMode.HALF_UP));

}
@Named("getFirstVariantImage")
    default String getFirstVariantImage(List<ProductVariant> variants){
    if(variants== null || variants.size()==0){
        return null;
    }
    return variants.get(0).getImageUrl();

}
@Named("getFirstVariantPrice")
    default BigDecimal getFirstVariantPrice(List<ProductVariant> variants){
    if(variants== null || variants.size()==0){
        return BigDecimal.ZERO;
    }
    return  BigDecimal.valueOf(variants.get(0).getPrice());

}
    @Named("getDiscountPercent")
    default double getDiscountPercent(Promotion promotion) {
        if(promotion!=null){
            double dc=  promotion.isStatus() ? promotion.getDiscountPercent() : 0.0;
            if(promotion.getEndDate()!=null && promotion.getEndDate().isBefore(java.time.LocalDateTime.now())){
                dc=0.0;
            }
            return dc;
        }
        return 0.0;
    }
    @Named("calculateTotalStock")
    default Integer calculateTotalStock(List<ProductVariant> variants) {
        if (variants == null || variants.isEmpty()) { return 0; }
        return variants.stream().mapToInt(ProductVariant::getStockQuantity).sum();
    }

}



