package com.example.Ecommerce.app.opinion;

import javax.persistence.*;

@Entity
@Table(name = "opinion", schema = "public")
public class Opinion {

    public Opinion(Long id, String name, String lastName, String description) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.description = description;
    }

    public Opinion() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String last_name) {
        this.lastName = last_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private String description;
}
