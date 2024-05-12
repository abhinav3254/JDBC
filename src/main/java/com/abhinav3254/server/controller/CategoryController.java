package com.abhinav3254.server.controller;


import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.model.Category;
import com.abhinav3254.server.model.Occasion;
import com.abhinav3254.server.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping("/add")
    public Response<String> addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @PutMapping("/update")
    public Response<String> updateCategory(@RequestBody Category category) {
        return categoryService.updateCategory(category);
    }

    @DeleteMapping("/delete/{id}")
    public Response<String> deleteCategory(@PathVariable("id") Long id) {
        return categoryService.deleteCategory(id);
    }

}
