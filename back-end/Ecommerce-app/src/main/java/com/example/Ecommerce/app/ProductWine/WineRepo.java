package com.example.Ecommerce.app.ProductWine;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface WineRepo extends JpaRepository<Wine, Long> {
    Optional<Wine> findWineById(Long id);

    void deleteWineById(Long id);

     List<Wine> findWineByCategory(String category);

    List<Wine> findWineByCategoryAndPriceAndCountry(String category, BigDecimal price, String country);
}
