package com.example.Ecommerce.app.ProductWine;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WineService {

    private final WineRepo wineRepo;


    public WineService(WineRepo wineRepo) {
        this.wineRepo = wineRepo;
    }

    public List<Wine> findAllWine(){
        return wineRepo.findAll();
    }
}
