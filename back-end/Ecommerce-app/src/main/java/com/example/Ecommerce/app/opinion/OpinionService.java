package com.example.Ecommerce.app.opinion;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OpinionService {

    private final OpinionRepo opinionRepo;

    public OpinionService(OpinionRepo opinionRepo) {
        this.opinionRepo = opinionRepo;
    }


    public List<Opinion> allOpinion() {
        return opinionRepo.findAll();
    }

    public Opinion addOpinion(Opinion opinion) {
        return opinionRepo.save(opinion);
    }

    public void deleteOpinion(Long id){
        opinionRepo.deleteById(id);
    }


}
