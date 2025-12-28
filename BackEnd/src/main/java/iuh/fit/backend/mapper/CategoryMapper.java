package iuh.fit.backend.mapper;

import iuh.fit.backend.dto.response.CategoryDTO;
import iuh.fit.backend.model.Category;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryDTO toCategoryDTO(Category category);
}
