package iuh.fit.backend.mapper;

import iuh.fit.backend.dto.response.BrandDTO;
import iuh.fit.backend.model.Brand;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BrandMapper {
    BrandDTO toBrandDTO(Brand brand);
}
