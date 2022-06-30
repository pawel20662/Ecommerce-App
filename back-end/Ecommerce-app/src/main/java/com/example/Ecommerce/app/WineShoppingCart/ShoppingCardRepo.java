package com.example.Ecommerce.app.WineShoppingCart;

import com.example.Ecommerce.app.ProductWine.Wine;
import com.example.Ecommerce.app.UserRegistration.UserRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingCardRepo extends JpaRepository<ShoppingCard, Long> {

    ShoppingCard findByUserRegistrationId(Long id);


    UserRegistration userRegistration(Long id);

    ShoppingCard findByUserRegistration(Long id);
}
