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
    public ResponseEntity<List<OpinionDTO>> getAllOpinion(){
        List<OpinionDTO> opinion = opinionService.allOpinion();
        return new ResponseEntity<>(opinion, HttpStatus.OK);
    }
    @PostMapping("/add")
    public void addOpinion(@RequestBody OpinionDTO opinion) {
        opinionService.addOpinion(opinion);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOpinion(@PathVariable("id") Long id){
        opinionService.deleteOpinion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
