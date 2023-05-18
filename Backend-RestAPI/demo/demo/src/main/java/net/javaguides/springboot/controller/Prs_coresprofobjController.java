package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_coresprofobj;
import net.javaguides.springboot.service.Prs_coresprofobjService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("api/prs_coresprofobj")
public class Prs_coresprofobjController {
    private Prs_coresprofobjService prs_coresprofobjService;
    // build create User REST API
    @PostMapping
    public ResponseEntity<Prs_coresprofobj>create(@RequestBody Prs_coresprofobj prs_coresprofobj){
        Prs_coresprofobj savedprs_coresprofobj = prs_coresprofobjService.create(prs_coresprofobj);
        return new ResponseEntity<>(savedprs_coresprofobj, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_coresprofobj/1
    @GetMapping("{id}")
    public ResponseEntity<Prs_coresprofobj>retrivebyid(@PathVariable("id") Long userId){
        Prs_coresprofobj prs_coresprofobj = prs_coresprofobjService.retrivebyid(userId);
        return new ResponseEntity<>(prs_coresprofobj, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<Prs_coresprofobj>>retriveall(){
        List<Prs_coresprofobj> prs_coresprofobj = prs_coresprofobjService.retriveall();
        return new ResponseEntity<>(prs_coresprofobj, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/prs_coresprofobj/1
    public ResponseEntity<Prs_coresprofobj>update(@PathVariable("id") Long userId,
                                             @RequestBody Prs_coresprofobj prs_coresprofobj){
        prs_coresprofobj.setId(userId);
        Prs_coresprofobj updatedPrs_coresprofobj = prs_coresprofobjService.update(prs_coresprofobj);
        return new ResponseEntity<>(updatedPrs_coresprofobj, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String>delete(@PathVariable("id") Long userId){
        prs_coresprofobjService.delete(userId);
        return new ResponseEntity<>("Correspondence profile successfully deleted!", HttpStatus.OK);
    }
}
