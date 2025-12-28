package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.PromotionDTO;
import iuh.fit.backend.mapper.PromotionMapper;
import iuh.fit.backend.model.Promotion;
import iuh.fit.backend.repository.PromotionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PromotionService {
    private final PromotionRepository promotionRepository;
    private final PromotionMapper promotionMapper;
    public PromotionService(PromotionRepository promotionRepository, PromotionMapper promotionMapper) {
        this.promotionRepository = promotionRepository;
        this.promotionMapper = promotionMapper;
    }
    @Transactional(readOnly = true)
    public List<PromotionDTO> getAll() {
        return promotionRepository.findAllByStatus(true).stream().filter(p->p.getEndDate().isAfter(LocalDateTime.now())).map(promotionMapper::toPromotionDTO).collect(Collectors.toList());
    }
}
