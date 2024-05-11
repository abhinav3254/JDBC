package com.abhinav3254.server.repository;

import com.abhinav3254.server.model.ProductDimensions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDimensionsRepository extends JpaRepository<ProductDimensions,Long> {
}
