package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_education;
import net.javaguides.springboot.service.Prs_educationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("api/prs_education")
public class Prs_educationController {
    private Prs_educationService prs_educationService;
    // build create User REST API
    @PostMapping
    public ResponseEntity<Prs_education>create(@RequestBody Prs_education prs_education){
        Prs_education savedprs_education = prs_educationService.create(prs_education);
        return new ResponseEntity<>(savedprs_education, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_education/1
    @GetMapping("{id}")
    public ResponseEntity<Prs_education>retrivebyid(@PathVariable("id") Long userId){
        Prs_education prs_education = prs_educationService.retrivebyid(userId);
        return new ResponseEntity<>(prs_education, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<Prs_education>>retriveall(){
        List<Prs_education> prs_education = prs_educationService.retriveall();
        return new ResponseEntity<>(prs_education, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/prs_education/1
    public ResponseEntity<Prs_education>update(@PathVariable("id") Long userId,
                                                  @RequestBody Prs_education prs_education){
        prs_education.setId(userId);
        Prs_education updatedPrs_education = prs_educationService.update(prs_education);
        return new ResponseEntity<>(updatedPrs_education, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String>delete(@PathVariable("id") Long userId){
        prs_educationService.delete(userId);
        return new ResponseEntity<>("Education profile successfully deleted!", HttpStatus.OK);
    }
}
