
package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_experience;
import net.javaguides.springboot.repository.Prs_experienceRespository;
import net.javaguides.springboot.service.Prs_experienceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class Prs_experienceServiceImpl implements Prs_experienceService {
    private Prs_experienceRespository prs_experienceRepository;
    @Override
    public Prs_experience create(Prs_experience prs_experience) {
        return prs_experienceRepository.save(prs_experience);
    }

    @Override
    public Prs_experience retrivebyid(Long userId) {
        Optional<Prs_experience> optionalprs_experience =prs_experienceRepository.findById(userId);
        return optionalprs_experience.get();
    }

    @Override
    public List<Prs_experience> retriveall() {
        return prs_experienceRepository.findAll();
    }

    @Override
    public Prs_experience update(Prs_experience prs_experience) {
        Prs_experience existingprs_experience = prs_experienceRepository.findById(prs_experience.getId()).get();
        existingprs_experience.setUsercode(prs_experience.getUsercode());
        existingprs_experience.setCompanyname(prs_experience.getCompanyname());
        existingprs_experience.setFromdate(prs_experience.getFromdate());
        existingprs_experience.setTodate(prs_experience.getTodate());
        existingprs_experience.setDesignation(prs_experience.getDesignation());
        Prs_experience updatedprs_experience = prs_experienceRepository.save(existingprs_experience);
        return updatedprs_experience;
    }

    @Override
    public void delete(Long userId) {
        prs_experienceRepository.deleteById(userId);
    }
}
