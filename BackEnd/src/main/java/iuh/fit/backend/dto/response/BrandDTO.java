package iuh.fit.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BrandDTO {
    private String brandId;
    private String slug;
    private String logo;
    private String name;
    private String description;
}
