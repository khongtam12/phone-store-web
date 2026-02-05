package iuh.fit.backend.controller;

import iuh.fit.backend.dto.request.ProductFilterRequest;
import iuh.fit.backend.dto.response.ProductSummaryDTO;
import iuh.fit.backend.model.Product;
import iuh.fit.backend.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping
    public ResponseEntity<List<ProductSummaryDTO>>getProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "16") int size
                                                               ){
        return  ResponseEntity.ok(productService.getProduct(page,size).getContent());
    }

    public List<Product> findAllProducts(){
        return productService.getProducts();
    }
    @PostMapping("/filter")
    public Page<ProductSummaryDTO> filterProducts(@RequestBody ProductFilterRequest request,
                                                  @RequestParam (defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "16") int size
    ){
return    productService.filterProducts(
        request.getBrand(),
        request.getCategory(),
        page,
        size );
    }
}
