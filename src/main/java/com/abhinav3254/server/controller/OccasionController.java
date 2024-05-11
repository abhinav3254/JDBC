package com.abhinav3254.server.controller;


import com.abhinav3254.server.dto.Response;
import com.abhinav3254.server.model.Occasion;
import com.abhinav3254.server.services.OccasionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/occasion")
public class OccasionController {
    @Autowired
    private OccasionService occasionService;

    @GetMapping
    public List<Occasion> getAllOccasions() {
        return occasionService.getAllOccasion();
    }

    @PostMapping("/add")
    public Response<String> addNewOccasion(@RequestBody Occasion occasion) {
        return occasionService.addOccasion(occasion);
    }

    @PutMapping("/update")
    public Response<String> updateOccasion(@RequestBody Occasion occasion) {
        return occasionService.updateOccasion(occasion);
    }

    @DeleteMapping("/delete/{id}")
    public Response<String> deleteOccasion(@PathVariable("id") Long id) {
        return occasionService.deleteOccasion(id);
    }

}
