package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_experience;
import net.javaguides.springboot.service.Prs_experienceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("api/prs_experience")
public class Prs_experienceController {
    private Prs_experienceService prs_experienceService;
    // build create User REST API
    @PostMapping
    public ResponseEntity<Prs_experience>create(@RequestBody Prs_experience prs_experience){
        Prs_experience savedprs_experience = prs_experienceService.create(prs_experience);
        return new ResponseEntity<>(savedprs_experience, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_experience/1
    @GetMapping("{id}")
    public ResponseEntity<Prs_experience>retrivebyid(@PathVariable("id") Long userId){
        Prs_experience prs_experience = prs_experienceService.retrivebyid(userId);
        return new ResponseEntity<>(prs_experience, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<Prs_experience>>retriveall(){
        List<Prs_experience> prs_experience = prs_experienceService.retriveall();
        return new ResponseEntity<>(prs_experience, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/prs_experience/1
    public ResponseEntity<Prs_experience>update(@PathVariable("id") Long userId,
                                               @RequestBody Prs_experience prs_experience){
        prs_experience.setId(userId);
        Prs_experience updatedPrs_experience = prs_experienceService.update(prs_experience);
        return new ResponseEntity<>(updatedPrs_experience, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String>delete(@PathVariable("id") Long userId){
        prs_experienceService.delete(userId);
        return new ResponseEntity<>("Experience details successfully deleted!", HttpStatus.OK);
    }
}
