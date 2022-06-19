package com.example.Ecommerce.app.UserRegistration;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class UserRegistrationDTO {

    private Long id;
    private String emailId;
    private String userName;
    private String password;

}
