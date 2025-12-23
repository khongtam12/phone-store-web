package iuh.fit.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductSummaryDTO {
    private String id;
    private String link;
    private String image;
    private String thumbnailUrl;
    private String name;
    private String brandName;
    private  String categoryName;
    private int totalStock;
    private String status;
    private BigDecimal price;
    private BigDecimal oldPrice;
    private double discountPercent;


}
