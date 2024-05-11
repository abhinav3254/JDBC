package com.abhinav3254.server.repository;

import com.abhinav3254.server.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BrandRepository extends JpaRepository<Brand,Long> {
    Optional<Brand> findByName(String name);
}
