package com.example.Ecommerce.app.ProductWine;

import lombok.AllArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="wine", schema = "public")
@AllArgsConstructor
public class Wine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "shopping_card_id")
    private Wine shoppingCard;

    public Wine(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    private String category;
    public Boolean getNew_product() {
        return new_product;
    }

    public void setNew_product(Boolean new_product) {
        this.new_product = new_product;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String desc) {
        this.description = desc;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Wine(Boolean new_product, String description, String imgUrl) {
        this.new_product = new_product;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    private Boolean new_product;
    private String description;
    private String imgUrl;

    public Wine(Long id, String name, String mark, BigDecimal price, String country) {
        id = id;
        this.name = name;
        this.mark = mark;
        this.price = price;
        this.country = country;
    }

    private String mark;

    public Wine() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    private BigDecimal price;
    private String country;

    public Wine getShoppingCard() {
        return shoppingCard;
    }

    public void setShoppingCard(Wine shoppingCard) {
        this.shoppingCard = shoppingCard;
    }
}
