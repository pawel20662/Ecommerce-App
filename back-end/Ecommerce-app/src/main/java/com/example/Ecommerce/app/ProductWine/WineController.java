package com.example.Ecommerce.app.ProductWine;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/wine")
public class WineController {

    private final WineService wineService;


    public WineController(WineService wineService) {
        this.wineService = wineService;

    }

    @GetMapping("/all")
    public ResponseEntity<List<Wine>> getAllWine() {
        List<Wine> wine = wineService.findAllWine();
        return new  ResponseEntity<>(wine,HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Wine> getWineById(@PathVariable("id") Long id){
         Wine wine = wineService.findWineById(id);
         return new ResponseEntity<>(wine, HttpStatus.OK);
    }
    @GetMapping("/{category}")
    public ResponseEntity<List<Wine>> findWineByCategory(@PathVariable("category") String category){
        List<Wine> categoryWine = wineService.findWineByCategory(category);
        return new ResponseEntity<>(categoryWine, HttpStatus.OK);
    }
    @GetMapping("/{category}/{min-price}/{max-price}/{country}")
    public ResponseEntity<List<Wine>> findWineByCategoryAndPriceAndCountry(@PathVariable("category") String category,
                                                                           @PathVariable("min-price")BigDecimal minPrice,
                                                                           @PathVariable("max-price")BigDecimal maxPrice,
                                                                           @PathVariable("country") String country){
        List<Wine> filterWine = wineService.findWineByCategoryAndCountryAndMaxMinPrice(category, country, minPrice, maxPrice);
        return new ResponseEntity<>(filterWine, HttpStatus.OK);
    }
        //todo nie szuka ceny od 100-300\\
    @PostMapping("/add")
    public ResponseEntity<Wine> AddWine(@RequestBody Wine wine) {
        Wine newWine = wineService.addWine(wine);
        return new ResponseEntity<>(newWine, HttpStatus.OK);
    }

    @Transactional
    @PutMapping("/update/{id}")
    public ResponseEntity<Wine> updateEmployee(@RequestBody Wine wine, @PathVariable("id") Long id) {
        Wine updateWine = wineService.updateWine(wine, id);
        return new ResponseEntity(updateWine, HttpStatus.OK);
    }
    //todo do zrobienia update by id  dalej nie działa\\


    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteWine(@PathVariable("id") Long id) {
        wineService.deleteWine(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
