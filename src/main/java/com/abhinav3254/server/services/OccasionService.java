package com.abhinav3254.server.services;


import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.exception.CustomException;
import com.abhinav3254.server.jwt.JwtFilter;
import com.abhinav3254.server.model.Occasion;
import com.abhinav3254.server.repository.OccasionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OccasionService {
    @Autowired
    private OccasionRepository occasionRepository;
    @Autowired
    private JwtFilter jwtFilter;

    public List<Occasion> getAllOccasion() {
        return occasionRepository.findAll(Sort.by(Sort.Direction.ASC,"name"));
    }

    public Response<String> addOccasion(Occasion occasion) {
        if (jwtFilter.isAdmin()) {
            if (occasion.getName().isEmpty()) throw new CustomException("Empty Occasion", HttpStatus.BAD_REQUEST);
            Optional<Occasion> optionalOccasion = occasionRepository.findByName(occasion.getName());
            if (optionalOccasion.isEmpty()) {
                occasionRepository.save(occasion);
            } throw new CustomException("Already there is Occasion with same name",HttpStatus.CONFLICT);
        } throw new CustomException("Unauthorized Access",HttpStatus.UNAUTHORIZED);
    }

    public Response<String> updateOccasion(Occasion occasion) {
        if (jwtFilter.isAdmin()) {
            if (occasion.getName().isEmpty()) throw new CustomException("Empty Occasion", HttpStatus.BAD_REQUEST);
            Optional<Occasion> optionalOccasion = occasionRepository.findById(occasion.getId());
            if (optionalOccasion.isPresent()) {
                Occasion occasion1 = optionalOccasion.get();
                occasion1.setName(occasion.getName());
                occasionRepository.save(occasion1);
            } throw new CustomException("Occasion Not found",HttpStatus.NOT_FOUND);
        } throw new CustomException("Unauthorized Access",HttpStatus.UNAUTHORIZED);
    }

    public Response<String> deleteOccasion(Long id) {
        if (jwtFilter.isAdmin()) {
            occasionRepository.deleteById(id);
            return new Response<>("Occasion Deleted By Id "+id);
        } throw new CustomException("Unauthorized Access",HttpStatus.UNAUTHORIZED);
    }
}
