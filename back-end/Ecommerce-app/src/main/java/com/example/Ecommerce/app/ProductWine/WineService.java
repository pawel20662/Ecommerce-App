package com.example.Ecommerce.app.ProductWine;

import com.example.Ecommerce.app.Exception.UserNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class WineService {

    private final WineRepo wineRepo;


    public WineService(WineRepo wineRepo) {
        this.wineRepo = wineRepo;
    }

    public List<Wine> findAllWine(){

        return wineRepo.findAll();
    }

    public Wine addWine(Wine wine) {
        return wineRepo.save(wine);
    }

    public Wine updateWine(Wine updateWine, Long id) {

        return wineRepo.save(updateWine);
    }
    public List<Wine> findWineByCategory(String category){
        return wineRepo.findWineByCategory(category);
    }

    public Wine findWineById(Long id) {
        return wineRepo.findWineById(id).orElseThrow(() -> new UserNotFoundException("User by " + id + "was not found"));
    }

    public void deleteWine(Long id) {

        wineRepo.deleteWineById(id);
    }

}
