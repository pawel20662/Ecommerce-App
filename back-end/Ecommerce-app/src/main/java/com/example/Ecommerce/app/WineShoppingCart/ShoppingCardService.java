package com.example.Ecommerce.app.WineShoppingCart;

import com.example.Ecommerce.app.ProductWine.Wine;
import com.example.Ecommerce.app.ProductWine.WineRepo;
import com.example.Ecommerce.app.UserRegistration.UserRegistration;
import com.example.Ecommerce.app.UserRegistration.UserRegistrationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional

@RequiredArgsConstructor
public class ShoppingCardService {
    private final ShoppingCardRepo shoppingCardRepo;
    private final UserRegistrationRepo userRegistrationRepo;
    private final WineRepo wineRepo;

//    public ShoppingCard addToCardFirstTime(Long wineId, Long userId) {
//        ShoppingCard shoppingCard = new ShoppingCard();
//        Optional<Wine> wine = wineRepo.findWineById(wineId);
//        userRegistrationRepo.findById(userId).ifPresent(userRegistration -> {shoppingCard.setUserRegistration(userRegistration);});
//        wine.ifPresent(wine1 -> {
//            shoppingCard.getWines().add(wine1);
//        });
//        return shoppingCardRepo.save(shoppingCard);
//    }
//
//    public void addToCard(Long wineId, Long userId) {
//        Optional<ShoppingCard> shoppingCardOptional = shoppingCardRepo.findByUserRegistrationId(userId);
//        if (shoppingCardOptional.isPresent()) {
//            ShoppingCard shoppingCard = shoppingCardOptional.get();
//            Optional<Wine> wineOptional = wineRepo.findWineById(wineId);
//            wineOptional.ifPresent(wine -> {
//                shoppingCard.getWines().add(wine);
//                shoppingCardRepo.save(shoppingCard);
//            });
//        }
//        else{
//             addToCardFirstTime(wineId, userId);
//        }
//    }

//    public void getAllWine(Long userId){
//        Optional<ShoppingCard> shoppingCardOptional = shoppingCardRepo.findByUserRegistrationId(userId);
//        shoppingCardOptional.isPresent(){
//
//        };








//    public ShoppingCard removeWineFromCard(Long id, UserRegistration userRegistration) {
//
//        ShoppingCard shoppingCard = shoppingCardRepo.findByUserRegistrationId(userRegistration.getId());
//        Set<Wine> wines = shoppingCard.getWines();
//        Wine item = null;
//        for (Wine wine : wines) {
//            if (wine.getId() == id) {
//                item = wine;
//            }
//        }
//        wines.remove(item);
//        shoppingCardRepo.delete((ShoppingCard) wines);
//        return shoppingCardRepo.save(shoppingCard);
//    }
//
//    public void clearCard(Long id) {
//        ShoppingCard clear = shoppingCardRepo.findByUserRegistrationId(id);
//        shoppingCardRepo.delete(clear);
//    }
}
