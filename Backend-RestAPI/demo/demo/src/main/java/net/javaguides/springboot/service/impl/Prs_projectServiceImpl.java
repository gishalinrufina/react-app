
package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_project;
import net.javaguides.springboot.repository.Prs_projectRespository;
import net.javaguides.springboot.service.Prs_projectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class Prs_projectServiceImpl implements Prs_projectService {
    private Prs_projectRespository prs_projectRepository;
    @Override
    public Prs_project create(Prs_project prs_project) {
        return prs_projectRepository.save(prs_project);
    }

    @Override
    public Prs_project retrivebyid(Long userId) {
        Optional<Prs_project> optionalprs_project =prs_projectRepository.findById(userId);
        return optionalprs_project.get();
    }

    @Override
    public List<Prs_project> retriveall() {
        return prs_projectRepository.findAll();
    }

    @Override
    public Prs_project update(Prs_project prs_project) {
        Prs_project existingprs_project = prs_projectRepository.findById(prs_project.getId()).get();
        existingprs_project.setUsercode(prs_project.getUsercode());
        existingprs_project.setPname(prs_project.getPname());
        existingprs_project.setTechused(prs_project.getTechused());
        existingprs_project.setDescription(prs_project.getDescription());
        existingprs_project.setResponsibility(prs_project.getResponsibility());
        Prs_project updatedprs_project = prs_projectRepository.save(existingprs_project);
        return updatedprs_project;
    }

    @Override
    public void delete(Long userId) {
        prs_projectRepository.deleteById(userId);
    }
}
