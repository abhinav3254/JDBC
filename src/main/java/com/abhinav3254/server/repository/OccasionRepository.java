package com.abhinav3254.server.repository;

import com.abhinav3254.server.model.Occasion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OccasionRepository extends JpaRepository<Occasion,Long> {
}
