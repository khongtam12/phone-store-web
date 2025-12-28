package iuh.fit.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PromotionDTO {
    private String promotionId;
    private String name;
    private double discountPercent;
    private String description;
    private boolean status;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private List<String> productIds;
}
