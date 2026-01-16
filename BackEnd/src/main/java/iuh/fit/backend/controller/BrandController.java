package iuh.fit.backend.controller;

import iuh.fit.backend.dto.response.BrandDTO;
import iuh.fit.backend.service.BrandService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/brands")
public class BrandController {
 private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }
@GetMapping
    public List<BrandDTO> getAllBrands() {
        return brandService.getAllBrands();
    }
}
