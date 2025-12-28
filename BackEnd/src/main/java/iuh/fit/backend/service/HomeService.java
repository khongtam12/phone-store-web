package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HomeService {
    private final PromotionService promotionService;
    private final BrandService brandService;
    private final ProductService productService;
    private final CategoryService categoryService;
    private static final int HOT_SALE_LIMIT = 12;
    private static final int NEWEST_PRODUCTS_LIMIT = 16;
    public HomeService(PromotionService promotionService, BrandService brandService, ProductService productService, CategoryService categoryService) {
        this.promotionService = promotionService;
        this.brandService = brandService;
        this.productService = productService;
        this.categoryService = categoryService;
    }
    public HomeDataDTO getHomeData() {
        List<CategoryDTO> categories=categoryService.getAll().stream().limit(5).collect(Collectors.toList());
        List<PromotionDTO> promotions=promotionService.getAll().stream().limit(5).collect(Collectors.toList());
        List<ProductSummaryDTO> hotSaleProduct=productService.getHotSaleProducts(HOT_SALE_LIMIT);
        List<ProductSummaryDTO> newsProduct=productService.getNewsProducts(NEWEST_PRODUCTS_LIMIT);
        List<BrandDTO> brands=brandService.getAllBrands();
        return new HomeDataDTO(categories,promotions,brands,hotSaleProduct,newsProduct);
    }

}
