package com.example.Ecommerce.app.ProductWine;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
