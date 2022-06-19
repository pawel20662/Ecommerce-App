package com.example.Ecommerce.app.UserRegistration;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class UserRegistrationService {

    private final UserRegistrationRepo userRegistrationRepo;

    public UserRegistration saveUser(UserRegistrationDTO userRegistration) {
        UserRegistration userRegistrationEntity = new UserRegistration();
        userRegistrationEntity.setUserName(userRegistration.getUserName());
        userRegistrationEntity.setPassword(userRegistration.getPassword());
        userRegistrationEntity.setEmailId(userRegistration.getEmailId());
        return userRegistrationRepo.save(userRegistrationEntity);
    }

    public UserRegistrationDTO findUserByEmailId(String email) {
        UserRegistration userRegistration = userRegistrationRepo.findByEmailId(email);
        return UserRegistrationDTO.builder()
                .emailId(userRegistration.getEmailId())
                .userName(userRegistration.getUserName())
                .password(userRegistration.getPassword())
                .id(userRegistration.getId())
                .build();
    }

    public UserRegistration findUserByEmailIdAndPassword(String email, String password) {
        return userRegistrationRepo.findUserByEmailIdAndPassword(email, password);
    }

    public List<UserRegistration> findAllUser() {
        return userRegistrationRepo.findAll();
    }

    public void deleteUserById(Long id) {
        userRegistrationRepo.deleteUserById(id);
    }
}
