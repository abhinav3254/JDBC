package com.abhinav3254.server.services;


import com.abhinav3254.server.dto.LoginDTO;
import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.dto.SignUpDTO;
import com.abhinav3254.server.dto.UpdateProfileDTO;
import com.abhinav3254.server.exception.CustomException;
import com.abhinav3254.server.jwt.JwtUtils;
import com.abhinav3254.server.model.User;
import com.abhinav3254.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    public String login(LoginDTO login) {
        Optional<User> userOptional = userRepository.findByEmail(login.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(login.getPassword())) {
                return jwtUtils.generateToken(user.getEmail(), user.getId(),user.getRole());
            } throw new CustomException("Invalid Password",HttpStatus.BAD_REQUEST);
        } throw new CustomException("Invalid Credentials", HttpStatus.BAD_REQUEST);
    }

    public String signUp(SignUpDTO sign) {
        System.out.println(sign);
        User user = validateSignUpRequest(sign);
        userRepository.save(user);
        return jwtUtils.generateToken(user.getEmail(), user.getId(),user.getRole());
    }

    private User validateSignUpRequest(SignUpDTO sign) {
        if (sign.getName().isEmpty() || sign.getEmail().isEmpty() || sign.getPassword().isEmpty() || sign.getPhone().isEmpty()) {
            throw new CustomException("Fields can't be empty", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setEmail(sign.getEmail());
        user.setName(sign.getName());
        user.setPhone(sign.getPhone());
        user.setPassword(sign.getPassword());
        user.setGender(sign.getGender());
        user.setRole("USER");
        return user;
    }

    public Response<String> updateProfile(UpdateProfileDTO dto) {
        Optional<User> userOptional = userRepository.findById(dto.getId());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (!Objects.isNull(dto.getName()) && !user.getName().equals(dto.getName())) {
                user.setName(dto.getName());
            }
            if (!Objects.isNull(dto.getPhone()) && !user.getPhone().equals(dto.getPhone())) {
                user.setPhone(dto.getPhone());
            }
            if (!Objects.isNull(dto.getEmail()) && !user.getName().equals(dto.getEmail())) {
                user.setName(dto.getName());
            }
            if (!Objects.isNull(dto.getPassword()) && !user.getPassword().equals(dto.getPassword())) {
                user.setPassword(dto.getPassword());
            }
            if (!Objects.isNull(dto.getGender()) && !user.getGender().equals(dto.getGender())) {
                user.setGender(dto.getGender());
            }
            try {
                if (!Objects.isNull(dto.getProfilePic()) && !Arrays.equals(user.getProfilePic(), dto.getProfilePic().getBytes())) {
                    user.setProfilePic(dto.getProfilePic().getBytes());
                }
            } catch (IOException e) {
                throw new CustomException("Error in parsing Image",HttpStatus.BAD_REQUEST);
            }
            userRepository.save(user);
            return new Response<>("Profile Updated");
        } throw new CustomException("User not found by id :- "+dto.getId(),HttpStatus.BAD_REQUEST);
    }
}
