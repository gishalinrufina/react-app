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
    public ResponseEntity<Usersetting> createusersetting(@RequestBody Usersetting usersetting){
        Usersetting savedUsersetting = usersettingService.createusersetting(usersetting);
        return new ResponseEntity<>(savedUsersetting, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/users/1
    @GetMapping("{id}")
    public ResponseEntity<Usersetting>  getusersettingById(@PathVariable("id") Long userId){
        Usersetting usersetting = usersettingService.getusersettingById(userId);
        return new ResponseEntity<>(usersetting, HttpStatus.OK);
    }

    // Build Get All Users REST API
    // c
    @GetMapping
    public ResponseEntity<List<Usersetting>> getAllusersettings(){
        List<Usersetting> usersetting = usersettingService.getAllusersettings();
        return new ResponseEntity<>(usersetting, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/users/1
    public ResponseEntity<Usersetting> updateusersetting(@PathVariable("id") Long userId,
                                           @RequestBody Usersetting usersetting){
        usersetting.setId(userId);
        Usersetting updatedUsersetting = usersettingService.updateusersetting(usersetting);
        return new ResponseEntity<>(updatedUsersetting, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteusersetting(@PathVariable("id") Long userId){
        usersettingService.deleteusersetting(userId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }
}
