
package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_project;
import net.javaguides.springboot.service.Prs_projectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("api/prs_project")
public class Prs_projectController {
    private Prs_projectService prs_projectService;
    // build create User REST API
    @PostMapping
    public ResponseEntity<Prs_project>create(@RequestBody Prs_project prs_project){
        Prs_project savedprs_project= prs_projectService.create(prs_project);
        return new ResponseEntity<>(savedprs_project, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_project/1
    @GetMapping("{id}")
    public ResponseEntity<Prs_project>retrivebyid(@PathVariable("id") Long userId){
        Prs_project prs_project = prs_projectService.retrivebyid(userId);
        return new ResponseEntity<>(prs_project, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<Prs_project>>retriveall(){
        List<Prs_project> prs_project = prs_projectService.retriveall();
        return new ResponseEntity<>(prs_project, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/prs_project/1
    public ResponseEntity<Prs_project>update(@PathVariable("id") Long userId,
                                                @RequestBody Prs_project prs_project){
        prs_project.setId(userId);
        Prs_project updatedPrs_project = prs_projectService.update(prs_project);
        return new ResponseEntity<>(updatedPrs_project, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String>delete(@PathVariable("id") Long userId){
        prs_projectService.delete(userId);
        return new ResponseEntity<>("Project details successfully deleted!", HttpStatus.OK);
    }
}
