package com.abhinav3254.server.controller;


import com.abhinav3254.server.dto.BrandDTO;
import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RequestMapping("/brand")
@RestController
public class BrandController {

    @Autowired
    private BrandService brandService;

    @GetMapping
    public List<BrandDTO> getAllBrands() {
        return brandService.getAllBrands();
    }

    @PostMapping("/add")
    public Response<String> addNewBrand(@ModelAttribute BrandDTO brand) {
        return brandService.addNewBrand(brand);
    }

    @PutMapping("/update")
    public Response<String> updateBrand(@ModelAttribute BrandDTO brandDTO) {
        return brandService.updateBrand(brandDTO);
    }

    @DeleteMapping("/delete/{id}")
    public Response<String> deleteBrand(@PathVariable("id") Long id) {
        return brandService.deleteBrand(id);
    }
}
