package com.example.Ecommerce.app.WineShoppingCart;

import com.example.Ecommerce.app.ProductWine.Wine;
import com.example.Ecommerce.app.UserRegistration.UserRegistration;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="shopping_card", schema = "public")
public class ShoppingCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long id;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "user_registration_id", referencedColumnName = "id")
//    private UserRegistration userRegistration;

    private Set<Wine> wines;

}
