package com.example.Ecommerce.app.UserRegistration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRegistrationRepo extends JpaRepository<UserRegistration, Long> {

    UserRegistration findByEmailId(String emailId);

    UserRegistration findUserByEmailIdAndPassword(String emailId, String password);

      void deleteUserById(Long id);
}
