package com.example.Ecommerce.app.ProductWine;

import com.example.Ecommerce.app.Exception.UserNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class WineService {

    private final WineRepo wineRepo;


    public WineService(WineRepo wineRepo) {
        this.wineRepo = wineRepo;
    }

    public List<Wine> findAllWine() {

        return wineRepo.findAll();
    }

    public Wine addWine(Wine wine) {
        return wineRepo.save(wine);
    }

    public Wine updateWine(Long id, Wine wine){
        Optional<Wine> oldWineOpt = wineRepo.findWineById(id);
        oldWineOpt.ifPresent(oldWine -> {
            oldWine.setName(wine.getName());
            oldWine.setMark(wine.getMark());
            oldWine.setCategory(wine.getCategory());
            oldWine.setPrice(wine.getPrice());
            oldWine.setCountry(wine.getCountry());
            oldWine.setDescription(wine.getDescription());
            oldWine.setImgUrl(wine.getImgUrl());
            oldWine.setNew_product(wine.getNew_product());
            wineRepo.save(oldWine);
        });

        return wine;
    }

    public List<Wine> findWineByCategory(String category) {
        return wineRepo.findWineByCategory(category);
    }

    public Wine findWineById(Long id) {
        return wineRepo.findWineById(id).orElseThrow(() -> new UserNotFoundException("User by " + id + "was not found"));
    }

    public List<Wine> findWineByCategoryAndCountryAndMaxMinPrice(String category, String country, BigDecimal minPrice, BigDecimal maxPrice) {
        return wineRepo.findWineByCategoryAndCountryAndPriceBetween(category, country, minPrice, maxPrice);
    }

    public void deleteWine(Long id) {

        wineRepo.deleteWineById(id);
    }

}
