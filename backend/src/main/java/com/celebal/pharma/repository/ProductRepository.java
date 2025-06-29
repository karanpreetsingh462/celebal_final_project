package com.celebal.pharma.repository;

import com.celebal.pharma.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
