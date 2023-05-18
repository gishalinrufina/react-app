
package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Submenusetting;
import net.javaguides.springboot.service.SubmenusettingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("api/submenu-setting")
public class SubmenusettingController {
    private SubmenusettingService submenusettingService;
    // build create User REST API
    @PostMapping
    public ResponseEntity<Submenusetting>create(@RequestBody Submenusetting submenusetting){
        Submenusetting savedsubmenusetting = submenusettingService.create(submenusetting);
        return new ResponseEntity<>(savedsubmenusetting, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/submenu-setting/1
    @GetMapping("{id}")
    public ResponseEntity<Submenusetting>retrivebyid(@PathVariable("id") Long userId){
        Submenusetting submenusetting = submenusettingService.retrivebyid(userId);
        return new ResponseEntity<>(submenusetting, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<Submenusetting>>retriveall(){
        List<Submenusetting> submenusetting = submenusettingService.retriveall();
        return new ResponseEntity<>(submenusetting, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/submenu-setting/1
    public ResponseEntity<Submenusetting>update(@PathVariable("id") Long userId,
                                             @RequestBody Submenusetting submenusetting){
        submenusetting.setId(userId);
        Submenusetting updatedSubmenusetting = submenusettingService.update(submenusetting);
        return new ResponseEntity<>(updatedSubmenusetting, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String>delete(@PathVariable("id") Long userId){
        submenusettingService.delete(userId);
        return new ResponseEntity<>("Sub menu successfully deleted!", HttpStatus.OK);
    }
}
