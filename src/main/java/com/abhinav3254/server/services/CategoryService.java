package com.abhinav3254.server.services;


import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.exception.CustomException;
import com.abhinav3254.server.jwt.JwtFilter;
import com.abhinav3254.server.model.Category;
import com.abhinav3254.server.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private JwtFilter jwtFilter;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll(Sort.by(Sort.Direction.ASC,"name"));
    }

    public Response<String> addCategory(Category category) {
        if (jwtFilter.isAdmin()) {
            if (!category.getName().isEmpty()) {
                Optional<Category> optionalCategory = categoryRepository.findByName(category.getName());
                if (optionalCategory.isEmpty()) {
                    categoryRepository.save(category);
                } throw new CustomException("Category Already Exists",HttpStatus.CONFLICT);
            }
        }throw new CustomException("Unauthorized Access", HttpStatus.UNAUTHORIZED);
    }

    public Response<String> updateCategory(Category category) {
        if (jwtFilter.isAdmin()) {
            Optional<Category> optionalCategory = categoryRepository.findById(category.getId());
            if (optionalCategory.isPresent()) {
                Category category1 = optionalCategory.get();
                if (!Objects.isNull(category.getName()) && !category1.getName().equals(category.getName())) {
                    category1.setName((category.getName()));
                    categoryRepository.save(category1);
                    return new Response<>("Category Updated");
                }
            } throw new CustomException("Category not found",HttpStatus.NOT_FOUND);
        }throw new CustomException("Unauthorized Access", HttpStatus.UNAUTHORIZED);
    }

    public Response<String> deleteCategory(Long id) {
        if (jwtFilter.isAdmin()) {
            Optional<Category> categoryOptional = categoryRepository.findById(id);
            if (categoryOptional.isPresent()) {
                categoryRepository.delete(categoryOptional.get());
            } else throw new CustomException("category Not found ",HttpStatus.NOT_FOUND);
        }throw new CustomException("Unauthorized Access", HttpStatus.UNAUTHORIZED);
    }
}
