package net.javaguides.springboot.controller;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.*;
import net.javaguides.springboot.service.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin

@RestController
@AllArgsConstructor
@RequestMapping("api/personal_resume_management_system")
public class UsersettingController {
    private UsersettingService usersettingService;
    private Prs_experienceService prs_experienceService;

    private MenusettingService menusettingService;
    private Prs_coresprofobjService prs_coresprofobjService;
    private Prs_educationService prs_educationService;
    private Prs_projectService prs_projectService;
    private Prs_technicalService prs_technicalService;
    private SubmenusettingService submenusettingService;

    // build create User REST API
    @PostMapping("usersetting")
    public ResponseEntity<Usersetting> create(@RequestBody Usersetting usersetting){
        Usersetting savedUsersetting = usersettingService.create(usersetting);
        return new ResponseEntity<>(savedUsersetting, HttpStatus.CREATED);
    }
    @GetMapping("usersetting/{id}")
    public ResponseEntity<Usersetting>  retrivebyid(@PathVariable("id") Long userId){
        Usersetting usersetting = usersettingService.retrivebyid(userId);
        return new ResponseEntity<>(usersetting, HttpStatus.OK);
    }
    @GetMapping("usersetting")
    public ResponseEntity<List<Usersetting>> retriveall(){

        List<Usersetting> usersetting = usersettingService.retriveall();
        return new ResponseEntity<>(usersetting, HttpStatus.OK);
    }
    @PutMapping("usersetting/{id}")
    // http://localhost:8080/api/user-setting/1
    public ResponseEntity<Usersetting> updatesetting(@PathVariable("id") Long userId,
                                                     @RequestBody Usersetting usersetting){
        usersetting.setId(userId);
        Usersetting updatedUsersetting = usersettingService.update(usersetting);
        return new ResponseEntity<>(updatedUsersetting, HttpStatus.OK);
    }
    @DeleteMapping("usersetting/{id}")
    public ResponseEntity<String> deleteusersetting(@PathVariable("id") Long userId){
        usersettingService.delete(userId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }

    @PostMapping("menusetting")
    public ResponseEntity<Menusetting>createmenusetting(@RequestBody Menusetting menusetting){
        Menusetting savedmenusetting = menusettingService.mcreate(menusetting);
        return new ResponseEntity<>(savedmenusetting, HttpStatus.CREATED);
    }
    // build get user by id REST API
    // http://localhost:8080/api/user-setting/1

    @GetMapping("menusetting/{id}")
    public ResponseEntity<Menusetting> retrivebyidmenusetting(@PathVariable("id") Long userId){
        Menusetting menusetting = menusettingService.mretrivebyid(userId);
        return new ResponseEntity<>(menusetting, HttpStatus.OK);
    }
    // Build Get All Users REST API

    @GetMapping("menusetting")
    public ResponseEntity<List<Menusetting>>retriveallmenusetting(){
        List<Menusetting> menusetting = menusettingService.mretriveall();
        return new ResponseEntity<>(menusetting, HttpStatus.OK);
    }

    // Build Update User REST API

    @PutMapping("menusetting/{id}")
    // http://localhost:8080/api/menu-setting/1
    public ResponseEntity<Menusetting>updatemenusetting(@PathVariable("id") Long userId,
                                             @RequestBody Menusetting menusetting){
        menusetting.setId(userId);
        Menusetting updatedMenusetting = menusettingService.mupdate(menusetting);
        return new ResponseEntity<>(updatedMenusetting, HttpStatus.OK);
    }
    // Build Delete User REST API

    @DeleteMapping("menusetting/{id}")
    public ResponseEntity<String>deletemenuseting(@PathVariable("id") Long userId){
        menusettingService.mdelete(userId);
        return new ResponseEntity<>("Menu  successfully deleted!", HttpStatus.OK);
    }
    //start of submenusetting
    @PostMapping("submenusetting")
    public ResponseEntity<Submenusetting>createsubmenu(@RequestBody Submenusetting submenusetting){
        Submenusetting savedsubmenusetting = submenusettingService.create(submenusetting);
        return new ResponseEntity<>(savedsubmenusetting, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/submenu-setting/1
    @GetMapping("submenusetting/{id}")
    public ResponseEntity<Submenusetting>retrivebyidsubmenu(@PathVariable("id") Long userId){
        Submenusetting submenusetting = submenusettingService.retrivebyid(userId);
        return new ResponseEntity<>(submenusetting, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping("submenusetting")
    public ResponseEntity<List<Submenusetting>>retriveallsubmenu(){
        List<Submenusetting> submenusetting = submenusettingService.retriveall();
        return new ResponseEntity<>(submenusetting, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("submenusetting/{id}")
    // http://localhost:8080/api/submenu-setting/1
    public ResponseEntity<Submenusetting>updatesubmenu(@PathVariable("id") Long userId,
                                                @RequestBody Submenusetting submenusetting){
        submenusetting.setId(userId);
        Submenusetting updatedSubmenusetting = submenusettingService.update(submenusetting);
        return new ResponseEntity<>(updatedSubmenusetting, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("submenusetting/{id}")
    public ResponseEntity<String>deletesubmenu(@PathVariable("id") Long userId){
        submenusettingService.delete(userId);
        return new ResponseEntity<>("Sub menu successfully deleted!", HttpStatus.OK);
    }
    //end of submenusetting
//start of prs_coresprofobj
@PostMapping("prs_coresprofobj")
public ResponseEntity<Prs_coresprofobj>createcorrespondence(@RequestBody Prs_coresprofobj prs_coresprofobj){
    Prs_coresprofobj savedprs_coresprofobj = prs_coresprofobjService.create(prs_coresprofobj);
    return new ResponseEntity<>(savedprs_coresprofobj, HttpStatus.CREATED);
}

    // build get user by id REST API
    // http://localhost:8080/api/prs_coresprofobj/1
    @GetMapping("prs_coresprofobj/{id}")
    public ResponseEntity<Prs_coresprofobj>retrivebyidcorrespondence(@PathVariable("id") Long userId){
        Prs_coresprofobj prs_coresprofobj = prs_coresprofobjService.retrivebyid(userId);
        return new ResponseEntity<>(prs_coresprofobj, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping("prs_coresprofobj")
    public ResponseEntity<List<Prs_coresprofobj>>retriveallcorrespondence(){
        List<Prs_coresprofobj> prs_coresprofobj = prs_coresprofobjService.retriveall();
        return new ResponseEntity<>(prs_coresprofobj, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("prs_coresprofobj/{id}")
    // http://localhost:8080/api/prs_coresprofobj/1
    public ResponseEntity<Prs_coresprofobj>updatecorrespondence(@PathVariable("id") Long userId,
                                                  @RequestBody Prs_coresprofobj prs_coresprofobj){
        prs_coresprofobj.setId(userId);
        Prs_coresprofobj updatedPrs_coresprofobj = prs_coresprofobjService.update(prs_coresprofobj);
        return new ResponseEntity<>(updatedPrs_coresprofobj, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("prs_coresprofobj/{id}")
    public ResponseEntity<String>deletecorrespondence(@PathVariable("id") Long userId){
        prs_coresprofobjService.delete(userId);
        return new ResponseEntity<>("Correspondence profile successfully deleted!", HttpStatus.OK);
    }
    ///end of prs_coresprofobj
    //Start of prs_education
    @PostMapping("prs_education")
    public ResponseEntity<Prs_education>createeducation(@RequestBody Prs_education prs_education){
        Prs_education savedprs_education = prs_educationService.create(prs_education);
        return new ResponseEntity<>(savedprs_education, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_education/1
    @GetMapping("prs_education/{id}")
    public ResponseEntity<Prs_education>retrivebyideducation(@PathVariable("id") Long userId){
        Prs_education prs_education = prs_educationService.retrivebyid(userId);
        return new ResponseEntity<>(prs_education, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping("prs_education")
    public ResponseEntity<List<Prs_education>>retrivealeducation(){
        List<Prs_education> prs_education = prs_educationService.retriveall();
        return new ResponseEntity<>(prs_education, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("prs_education/{id}")
    // http://localhost:8080/api/prs_education/1
    public ResponseEntity<Prs_education>updateeducation(@PathVariable("id") Long userId,
                                               @RequestBody Prs_education prs_education){
        prs_education.setId(userId);
        Prs_education updatedPrs_education = prs_educationService.update(prs_education);
        return new ResponseEntity<>(updatedPrs_education, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("prs_education/{id}")
    public ResponseEntity<String>deleteeducation(@PathVariable("id") Long userId){
        prs_educationService.delete(userId);
        return new ResponseEntity<>("Education profile successfully deleted!", HttpStatus.OK);
    }

    //end of prs_education
    //Start of prs_experience
    @PostMapping("prs_experience")
    public ResponseEntity<Prs_experience>createexperience(@RequestBody Prs_experience prs_experience){
        Prs_experience savedprs_experience = prs_experienceService.create(prs_experience);
        return new ResponseEntity<>(savedprs_experience, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_experience/1
    @GetMapping("prs_experience/{id}")
    public ResponseEntity<Prs_experience>retrivebyidexperience(@PathVariable("id") Long userId){
        Prs_experience prs_experience = prs_experienceService.retrivebyid(userId);
        return new ResponseEntity<>(prs_experience, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping("prs_experience")
    public ResponseEntity<List<Prs_experience>>retriveallexperience(){
        List<Prs_experience> prs_experience = prs_experienceService.retriveall();
        return new ResponseEntity<>(prs_experience, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("prs_experience/{id}")
    // http://localhost:8080/api/prs_experience/1
    public ResponseEntity<Prs_experience>updateexperience(@PathVariable("id") Long userId,
                                                @RequestBody Prs_experience prs_experience){
        prs_experience.setId(userId);
        Prs_experience updatedPrs_experience = prs_experienceService.update(prs_experience);
        return new ResponseEntity<>(updatedPrs_experience, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("prs_experience/{id}")
    public ResponseEntity<String>deleteexperience(@PathVariable("id") Long userId){
        prs_experienceService.delete(userId);
        return new ResponseEntity<>("Experience details successfully deleted!", HttpStatus.OK);
    }

    //end of prs_experience

    //Start of prs_project
    @PostMapping("prs_project")
    public ResponseEntity<Prs_project>createproject(@RequestBody Prs_project prs_project){
        Prs_project savedprs_project= prs_projectService.create(prs_project);
        return new ResponseEntity<>(savedprs_project, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_project/1
    @GetMapping("prs_project/{id}")
    public ResponseEntity<Prs_project>retrivebyidproject(@PathVariable("id") Long userId){
        Prs_project prs_project = prs_projectService.retrivebyid(userId);
        return new ResponseEntity<>(prs_project, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping("prs_project")
    public ResponseEntity<List<Prs_project>>retriveallproject(){
        List<Prs_project> prs_project = prs_projectService.retriveall();
        return new ResponseEntity<>(prs_project, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("prs_project/{id}")
    // http://localhost:8080/api/prs_project/1
    public ResponseEntity<Prs_project>updateproject(@PathVariable("id") Long userId,
                                             @RequestBody Prs_project prs_project){
        prs_project.setId(userId);
        Prs_project updatedPrs_project = prs_projectService.update(prs_project);
        return new ResponseEntity<>(updatedPrs_project, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("prs_project/{id}")
    public ResponseEntity<String>deleteproject(@PathVariable("id") Long userId){
        prs_projectService.delete(userId);
        return new ResponseEntity<>("Project details successfully deleted!", HttpStatus.OK);
    }

    //end of prs_project
    //start of prs_technical
    @PostMapping("prs_technical")
    public ResponseEntity<Prs_technical>createtechnical(@RequestBody Prs_technical prs_technical){
        Prs_technical savedprs_technical = prs_technicalService.create(prs_technical);
        return new ResponseEntity<>(savedprs_technical, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/prs_technical/1
    @GetMapping("prs_technical/{id}")
    public ResponseEntity<Prs_technical>retrivebyidtechnical(@PathVariable("id") Long userId){
        Prs_technical prs_technical = prs_technicalService.retrivebyid(userId);
        return new ResponseEntity<>(prs_technical, HttpStatus.OK);
    }

    // Build Get All Users REST API
    @GetMapping("prs_technical")
    public ResponseEntity<List<Prs_technical>>retrivealltechnical(){
        List<Prs_technical> prs_technical = prs_technicalService.retriveall();
        return new ResponseEntity<>(prs_technical, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("prs_technical/{id}")
    // http://localhost:8080/api/prs_technical/1
    public ResponseEntity<Prs_technical>updatetechnical(@PathVariable("id") Long userId,
                                               @RequestBody Prs_technical prs_technical){
        prs_technical.setId(userId);
        Prs_technical updatedPrs_technical = prs_technicalService.update(prs_technical);
        return new ResponseEntity<>(updatedPrs_technical, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("prs_technical/{id}")
    public ResponseEntity<String>deletetechnical(@PathVariable("id") Long userId){
        prs_technicalService.delete(userId);
        return new ResponseEntity<>("Technical details successfully deleted!", HttpStatus.OK);
    }
    //end of prs_technical


}
