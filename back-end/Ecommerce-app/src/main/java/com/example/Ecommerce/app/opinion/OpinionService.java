package com.example.Ecommerce.app.opinion;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OpinionService {

    private final OpinionRepo opinionRepo;

    public OpinionService(OpinionRepo opinionRepo) {
        this.opinionRepo = opinionRepo;
    }


    public List<OpinionDTO> allOpinion() {
      List<Opinion> opinions = opinionRepo.findAll();
        return opinions.stream().map(opinion ->
            OpinionDTO.builder()
                    .id(opinion.getId())
                    .description(opinion.getDescription())
                    .name(opinion.getName())
                    .lastName(opinion.getLastName())
                    .build()
        ).collect(Collectors.toList());
    }

    public void addOpinion(OpinionDTO opinion) {
        Opinion opinion1 = new Opinion();
        opinion1.setDescription(opinion.getDescription());
        opinion1.setLastName(opinion.getLastName());
        opinion1.setName(opinion.getName());
          opinionRepo.save(opinion1);
    }

    public void deleteOpinion(Long id){
        opinionRepo.deleteById(id);
    }


}
