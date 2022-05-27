package com.example.EcommerceApp.ProductWine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WineService {

    private final WineRepo wineRepo;

    @Autowired
    public WineService(WineRepo wineRepo) {
        this.wineRepo = wineRepo;
    }

public List<Wine> findAllWine(){
        return wineRepo.findAll();
}
}
