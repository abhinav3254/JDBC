package com.abhinav3254.server.dto;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class BrandDTO {
    private Long id;
    private String name;
    private MultipartFile logo;
    private String image;
}
