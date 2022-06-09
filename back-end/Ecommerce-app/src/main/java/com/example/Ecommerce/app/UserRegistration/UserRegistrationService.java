package com.example.Ecommerce.app.UserRegistration;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserRegistrationService {

        private final UserRegistrationRepo userRegistrationRepo;

        public UserRegistration saveUser (UserRegistration userRegistration){
               return userRegistrationRepo.save(userRegistration);
        }

        public UserRegistration findUserByEmailId(String email) {
            return userRegistrationRepo.findByEmailId(email);
        }

        public UserRegistration findUserByEmailIdAndPassword(String email, String password) {
            return userRegistrationRepo.findUserByEmailIdAndPassword(email, password);
        }
        public List<UserRegistration> findAllUser() {
            return userRegistrationRepo.findAll();
        }
}
