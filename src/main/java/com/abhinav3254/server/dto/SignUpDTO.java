package com.abhinav3254.server.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;


@Data
public class SignUpDTO {
    private String name;
    private String email;
    private String phone;
    private String password;
    private String gender;
    private MultipartFile profilePic;
}
