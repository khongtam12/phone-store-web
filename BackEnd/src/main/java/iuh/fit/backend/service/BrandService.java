package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.BrandDTO;
import iuh.fit.backend.mapper.BrandMapper;
import iuh.fit.backend.repository.BrandRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BrandService {
    private final BrandRepository brandRepository;
private final BrandMapper brandMapper;
    public BrandService(BrandRepository brandRepository, BrandMapper brandMapper) {
        this.brandRepository = brandRepository;
        this.brandMapper = brandMapper;
    }
    @Transactional(readOnly = true)
    public List<BrandDTO> getAllBrands() {
        return brandRepository.findAllByDeletedFalse(true).stream()
                .map(brandMapper::toBrandDTO)
                .toList();
    }

}
