package com.example.Ecommerce.app.UserRegistration;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api")
public class UserRegistrationController {

    private final UserRegistrationService userRegistrationService;

    @PostMapping("/register")
    public ResponseEntity<UserRegistration> newUser(@RequestBody UserRegistration userRegistration) throws Exception {
        String temEmailId = userRegistration.getEmailId();
        if(temEmailId != null && "".equals(temEmailId)){
            UserRegistration user =  userRegistrationService.findUserByEmailId(temEmailId);
            if(user != null) {
                throw new Exception("user with " + temEmailId + "is already exist");
            }
        }
        UserRegistration UsrObject = userRegistrationService.saveUser(userRegistration);
        return new ResponseEntity<>(UsrObject, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<UserRegistration> loginUser(@RequestBody UserRegistration userRegistration) throws Exception {
        String tempEmailId = userRegistration.getEmailId();
        String tempPassword = userRegistration.getPassword();
        UserRegistration userLogin = userRegistrationService.findUserByEmailIdAndPassword(tempEmailId, tempPassword);
        if(userLogin == null){
            throw new Exception("bad credentials");
        }
        return new ResponseEntity<>(userLogin, HttpStatus.OK);
    }

    @GetMapping("allUsers")
    public ResponseEntity<List<UserRegistration>> getAllUsers() {
        List<UserRegistration> userRegistrations = userRegistrationService.findAllUser();
        return new ResponseEntity<>(userRegistrations, HttpStatus.OK);
    }

}
