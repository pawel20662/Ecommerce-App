package com.example.Ecommerce.app.ProductWine;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/add")
    public ResponseEntity<Wine> AddWine(@RequestBody Wine wine) {
        Wine newWine = wineService.addWine(wine);
        return new ResponseEntity<>(newWine, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteWine(@PathVariable("id") Long id) {
        wineService.deleteWine(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
