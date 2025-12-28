package iuh.fit.backend.service;

import iuh.fit.backend.dto.response.CategoryDTO;
import iuh.fit.backend.mapper.CategoryMapper;
import iuh.fit.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;
    public CategoryService(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }
    @Transactional(readOnly = true)
    public List<CategoryDTO> getAll(){
       return  categoryRepository.findAllByDeletedFalse(true).stream().map(categoryMapper::toCategoryDTO).collect(Collectors.toList());
    }
}
