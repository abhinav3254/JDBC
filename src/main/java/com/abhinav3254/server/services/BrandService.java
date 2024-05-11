package com.abhinav3254.server.services;


import com.abhinav3254.server.dto.BrandDTO;
import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.exception.CustomException;
import com.abhinav3254.server.jwt.JwtFilter;
import com.abhinav3254.server.model.Brand;
import com.abhinav3254.server.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private JwtFilter jwtFilter;

    public List<BrandDTO> getAllBrands() {
        List<Brand> brands =  brandRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
        List<BrandDTO> list = new ArrayList<>();
        for(Brand brand:brands) {
            BrandDTO brandDTO = new BrandDTO();
            brandDTO.setId(brand.getId());
            brandDTO.setName(brand.getName());
            brandDTO.setImage(encodeImage(brand.getLogo()));
            list.add(brandDTO);
        }
        return list;
    }

    private String encodeImage(byte[] imageBytes) {
        return Base64.getEncoder().encodeToString(imageBytes);
    }

    public Response<String> addNewBrand(BrandDTO brand) {
        if (jwtFilter.isAdmin()) {
            if (brand.getLogo().isEmpty()) throw new CustomException("No Logo present", HttpStatus.BAD_REQUEST);
            if (brand.getName().isEmpty()) throw new CustomException("No Name present",HttpStatus.BAD_REQUEST);
            Brand brand1 = new Brand();
            try {
                brand1.setLogo(brand.getLogo().getBytes());
            } catch (IOException e) {
                throw new CustomException("Error in parsing brand logo",HttpStatus.INTERNAL_SERVER_ERROR);
            }
            brand1.setName(brand.getName());
            brandRepository.save(brand1);
            return new Response<>("Added Brand with name "+brand.getName());
        } throw new CustomException("Unauthorized Access",HttpStatus.UNAUTHORIZED);
    }

    public Response<String> updateBrand(BrandDTO brandDTO) {
        if (jwtFilter.isAdmin()) {
            Optional<Brand> brandOptional = brandRepository.findById(brandDTO.getId());
            if (brandOptional.isPresent()) {
                Brand brand = getBrand(brandDTO, brandOptional.get());
                brandRepository.save(brand);
            } else throw new CustomException("Brand not found By Id "+brandDTO.getId(),HttpStatus.NOT_FOUND);
        } throw new CustomException("Unauthorized Access",HttpStatus.UNAUTHORIZED);
    }

    private static Brand getBrand(BrandDTO brandDTO, Brand brand) {
        if (!Objects.isNull(brandDTO.getName()) && !brand.getName().equals(brandDTO.getName())) {
            brand.setName(brandDTO.getName());
        }
        try {
            if (!Objects.isNull(brandDTO.getLogo())&& !Arrays.equals(brand.getLogo(), brandDTO.getLogo().getBytes())) {
                brand.setLogo(brandDTO.getLogo().getBytes());
            }
        } catch (IOException e) {
            throw new CustomException("Error in Updating Brand Image",HttpStatus.BAD_REQUEST);
        }
        return brand;
    }

    public Response<String> deleteBrand(Long id) {
        if (jwtFilter.isAdmin()) {
            brandRepository.deleteById(id);
            return new Response<>("Delete Brand with Id "+id);
        } throw new CustomException("Unauthorized Access",HttpStatus.UNAUTHORIZED);
    }
}
