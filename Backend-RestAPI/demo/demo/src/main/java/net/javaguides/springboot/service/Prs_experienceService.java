package net.javaguides.springboot.service;
import net.javaguides.springboot.entity.Prs_experience;
import java.util.List;
public interface Prs_experienceService {
    Prs_experience create(Prs_experience prs_experience);
    Prs_experience retrivebyid(Long userId);
    List<Prs_experience> retriveall();
    Prs_experience update(Prs_experience prs_experience);
    void delete(Long userId);
}
