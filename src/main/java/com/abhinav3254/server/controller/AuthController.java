package com.abhinav3254.server.controller;


import com.abhinav3254.server.dto.LoginDTO;
import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.dto.SignUpDTO;
import com.abhinav3254.server.dto.UpdateProfileDTO;
import com.abhinav3254.server.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/auth")
@CrossOrigin("*")
@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    private String login(@RequestBody LoginDTO login) {
        return authService.login(login);
    }

    @PostMapping("/register")
    private String signUp(@RequestBody SignUpDTO sign) {
        return authService.signUp(sign);
    }

    @PutMapping("/update/profile")
    private Response<String> updateProfile(@ModelAttribute UpdateProfileDTO dto) {
        return authService.updateProfile(dto);
    }

}
