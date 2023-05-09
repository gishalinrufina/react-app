package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Usersetting;
import net.javaguides.springboot.service.UsersettingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/user-setting")
public class UsersettingController {
    private UsersettingService usersettingService;

    // build create User REST API
    @PostMapping
    public ResponseEntity<Usersetting> create(@RequestBody Usersetting usersetting){
        Usersetting savedUsersetting = usersettingService.create(usersetting);
        return new ResponseEntity<>(savedUsersetting, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/user-setting/1
    @GetMapping("{id}")
    public ResponseEntity<Usersetting>  retrivebyid(@PathVariable("id") Long userId){
        Usersetting usersetting = usersettingService.retrivebyid(userId);
        return new ResponseEntity<>(usersetting, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<Usersetting>> retriveall(){
        List<Usersetting> usersetting = usersettingService.retriveall();
        return new ResponseEntity<>(usersetting, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/user-setting/1
    public ResponseEntity<Usersetting> update(@PathVariable("id") Long userId,
                                           @RequestBody Usersetting usersetting){
        usersetting.setId(userId);
        Usersetting updatedUsersetting = usersettingService.update(usersetting);
        return new ResponseEntity<>(updatedUsersetting, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long userId){
        usersettingService.delete(userId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }
}
