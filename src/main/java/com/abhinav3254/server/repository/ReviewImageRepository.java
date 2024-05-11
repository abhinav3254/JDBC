package com.abhinav3254.server.repository;

import com.abhinav3254.server.model.ReviewImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewImageRepository extends JpaRepository<ReviewImage,Long> {
}
