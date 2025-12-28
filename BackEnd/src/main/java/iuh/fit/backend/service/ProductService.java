package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.ProductSummaryDTO;
import iuh.fit.backend.mapper.ProductMapper;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.model.ProductStatus;
import iuh.fit.backend.model.ProductVariant;
import iuh.fit.backend.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
    public List<ProductSummaryDTO> getHotSaleProducts(int limit){
        PageRequest pageRequest =PageRequest.of(0,limit, Sort.by("promotion.discountPercent").descending());
        return productRepository.findProductByStatusActive(pageRequest ).stream().map(productMapper::toProductSummaryDTO).collect(Collectors.toList());
    }
    public List<ProductSummaryDTO> getNewsProducts(int limit){
        PageRequest pageRequest=PageRequest.of(0,limit, Sort.by("createdDate").descending());
        return productRepository.findProductByStatusActive(pageRequest).stream().map(productMapper::toProductSummaryDTO).collect(Collectors.toList());
    }
}
