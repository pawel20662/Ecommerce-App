package com.example.Ecommerce.app.opinion;

import javax.persistence.*;

@Entity
@Table(name = "opinion", schema = "public")
public class Opinion {

    public Opinion(Long id, String name, String last_name, String description) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
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

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
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
    private String last_name;
    private String description;
}
