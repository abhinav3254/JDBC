package com.abhinav3254.server.repository;


import com.abhinav3254.server.model.ClothSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothSizeRepository extends JpaRepository<ClothSize,Long> {
}
