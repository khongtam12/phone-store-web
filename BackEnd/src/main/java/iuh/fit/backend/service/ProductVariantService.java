package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.ProductSummaryDTO;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.model.ProductVariant;
import iuh.fit.backend.repository.ProductVariantRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductVariantService {
    private final ProductVariantRepository productVariantRepository;

    public ProductVariantService(ProductVariantRepository productVariantRepository) {
        this.productVariantRepository = productVariantRepository;
    }



}
