package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.ProductSummaryDTO;
import iuh.fit.backend.mapper.ProductMapper;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.model.ProductVariant;
import iuh.fit.backend.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }
    public Page<ProductSummaryDTO> getProduct(int page, int size){
        Page<Product> products=productRepository.findAll(PageRequest.of(page,size));
        return products.map(productMapper::toProductSummaryDTO);
    }
    public List<Product> getProducts(){
        return productRepository.findAll();
    }
}
