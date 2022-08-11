package com.example.Ecommerce.app.WineShoppingCart;

import com.example.Ecommerce.app.ProductWine.Wine;
import com.example.Ecommerce.app.UserRegistration.UserRegistration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("card")
public class ShoppingCardController {

    private final ShoppingCardService shoppingCardService;

    public ShoppingCardController(ShoppingCardService shoppingCardService) {
        this.shoppingCardService = shoppingCardService;
    }

//    @GetMapping("/allWines")
//    public ResponseEntity<Wine> getAllWine(UserRegistration userRegistration){
//        List<Wine> wines = (List<Wine>) shoppingCardService.getAllWineShoppingCard(userRegistration);
//        return new ResponseEntity<>((Wine) wines, HttpStatus.OK);
//    }
//    @PutMapping("/add")
//    public void addWineToCard(@RequestBody ShoppingCardWine shoppingCardWine){
//        shoppingCardService.addToCard(shoppingCardWine.getWineId(), shoppingCardWine.getUserId());
//    }

}
