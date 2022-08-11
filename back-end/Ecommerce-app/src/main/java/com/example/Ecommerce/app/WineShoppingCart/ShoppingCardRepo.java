package com.example.Ecommerce.app.WineShoppingCart;

import com.example.Ecommerce.app.ProductWine.Wine;
import com.example.Ecommerce.app.UserRegistration.UserRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShoppingCardRepo extends MongoRepository<ShoppingCard, Long> {

//    Optional<ShoppingCard>findByUserRegistrationId(Long id);
//
//
//    UserRegistration userRegistration(Long id);
//
//    ShoppingCard findByUserRegistration(Long id);
}
