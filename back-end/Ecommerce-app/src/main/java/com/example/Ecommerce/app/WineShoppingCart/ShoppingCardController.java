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

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<ShoppingCard> removeWineFromCard(@PathVariable("id") Long id, UserRegistration userRegistration) {
        ShoppingCard sc = shoppingCardService.removeWineFromCard(id, userRegistration);
        return new ResponseEntity<>(sc, HttpStatus.OK);
    }

    @DeleteMapping("/clear")
    public ResponseEntity<Object> clearCard(Long id) {
        shoppingCardService.clearCard(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/allWines")
    public ResponseEntity<Wine> getAllWine(UserRegistration userRegistration){
        List<Wine> wines = (List<Wine>) shoppingCardService.getAllWineShoppingCard(userRegistration);
        return new ResponseEntity<>((Wine) wines, HttpStatus.OK);
    }


}
