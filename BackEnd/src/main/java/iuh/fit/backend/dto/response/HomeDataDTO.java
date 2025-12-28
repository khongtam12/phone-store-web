package iuh.fit.backend.dto.response;

import iuh.fit.backend.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HomeDataDTO {
    private List<CategoryDTO> categories;
    private List<PromotionDTO> promotions;
    private List<BrandDTO> brands;
    private List<ProductSummaryDTO> hotSaleProducts;
    private List<ProductSummaryDTO> productList;
}
