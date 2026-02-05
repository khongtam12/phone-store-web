package iuh.fit.backend.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class ProductFilterRequest {
    private String brand;
    private String category;

}