package com.example.Ecommerce.app.opinion;

import com.example.Ecommerce.app.ProductWine.Wine;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/opinion")
public class OpinionController {

    private final OpinionService opinionService;

    public OpinionController(OpinionService opinionService) {
        this.opinionService = opinionService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Opinion>> getAllOpinion(){
        List<Opinion> opinion = opinionService.allOpinion();
        return new ResponseEntity<>(opinion, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Opinion> addOpinion(@RequestBody Opinion opinion) {
        Opinion newOpinion = opinionService.addOpinion(opinion);
        return new ResponseEntity<>(newOpinion, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOpinion(@PathVariable("id") Long id){
        opinionService.deleteOpinion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
