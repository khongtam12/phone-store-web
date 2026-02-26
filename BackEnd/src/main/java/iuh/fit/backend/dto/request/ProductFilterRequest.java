package iuh.fit.backend.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class ProductFilterRequest {
    private String brand;
    private String category;
    private Double minPrice;
    private Double maxPrice;
    private List<String> storages;
    private boolean isStockReady;

}