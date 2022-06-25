package com.example.Ecommerce.app.WineShoppingCart;

import com.example.Ecommerce.app.ProductWine.Wine;
import com.example.Ecommerce.app.ProductWine.WineRepo;
import com.example.Ecommerce.app.UserRegistration.UserRegistration;
import com.example.Ecommerce.app.UserRegistration.UserRegistrationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
@Transactional

@RequiredArgsConstructor
public class ShoppingCardService {

    private final ShoppingCardRepo shoppingCardRepo;
    private final UserRegistrationRepo userRegistrationRepo;
    private final WineRepo wineRepo;

    public Set<Wine> getAllWineShoppingCard(UserRegistration userRegistration) {
       return  shoppingCardRepo.findByUserRegistration(userRegistration.getId()).getWines();
    }

    public ShoppingCard addToCardFirstTime(Long Wineid, String emailId) {
        ShoppingCard shoppingCard = new ShoppingCard();
        Optional<Wine> wine = wineRepo.findWineById(Wineid);
        shoppingCard.setUserRegistration(userRegistrationRepo.findByEmailId(emailId));
        wine.ifPresent(wine1 -> {
            shoppingCard.getWines().add(wine1);
        });
        return shoppingCardRepo.save(shoppingCard);
    }

//    public ShoppingCard addToExistCard(Long id, UserRegistration userRegistration) {
//        ShoppingCard shoppingCard = shoppingCardRepo.findByUserRegistrationId(userRegistration.getId());
//        Wine p = shoppingCardRepo.findWineById(id);
//        boolean wineDoesExistInTheCart = false;
//        if (shoppingCard != null) {
//            Set<Wine> wines = shoppingCard.getWines();
//            for (Wine wine : wines) {
//                if (wine.getShoppingCard().equals(p)) {
//                    wineDoesExistInTheCart = true;
//                    shoppingCard.setWines(wines);
//                    return shoppingCardRepo.saveAndFlush(shoppingCard);
//                }
//            }
//        }
//        if (!wineDoesExistInTheCart && (shoppingCard != null)) {
//            Wine wine1 = new Wine();
//            wine1.setShoppingCard(p);
//            shoppingCard.getWines().add(wine1);
//            return shoppingCardRepo.saveAndFlush(shoppingCard);
//        }
//      return this.addToCardFirstTime(id,  );
//    }

    public ShoppingCard removeWineFromCard(Long id, UserRegistration userRegistration) {

        ShoppingCard shoppingCard = shoppingCardRepo.findByUserRegistrationId(userRegistration.getId());
        Set<Wine> wines = shoppingCard.getWines();
        Wine item = null;
        for (Wine wine : wines) {
            if (wine.getId() == id) {
                item = wine;
            }
        }
        wines.remove(item);
        shoppingCardRepo.delete((ShoppingCard) wines);
        return shoppingCardRepo.save(shoppingCard);
    }

    public void clearCard(Long id) {
        ShoppingCard clear = shoppingCardRepo.findByUserRegistrationId(id);
        shoppingCardRepo.delete(clear);
    }
}
