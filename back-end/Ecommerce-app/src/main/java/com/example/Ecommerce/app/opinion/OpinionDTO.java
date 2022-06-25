package com.example.Ecommerce.app.opinion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class OpinionDTO {

    private Long id;
    private String name;
    private String lastName;
    private String description;
}
