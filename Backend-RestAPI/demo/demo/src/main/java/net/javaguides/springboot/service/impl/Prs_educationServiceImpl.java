package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_education;
import net.javaguides.springboot.repository.Prs_educationRespository;
import net.javaguides.springboot.service.Prs_educationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class Prs_educationServiceImpl implements Prs_educationService {
    private Prs_educationRespository prs_educationRepository;
    @Override
    public Prs_education create(Prs_education prs_education) {
        return prs_educationRepository.save(prs_education);
    }

    @Override
    public Prs_education retrivebyid(Long userId) {
        Optional<Prs_education> optionalprs_education =prs_educationRepository.findById(userId);
        return optionalprs_education.get();
    }

    @Override
    public List<Prs_education> retriveall() {
        return prs_educationRepository.findAll();
    }

    @Override
    public Prs_education update(Prs_education prs_education) {
        Prs_education existingprs_education = prs_educationRepository.findById(prs_education.getId()).get();
        existingprs_education.setUsercode(prs_education.getUsercode());
        existingprs_education.setUg(prs_education.getUg());
        existingprs_education.setPg(prs_education.getPg());
        existingprs_education.setHsc(prs_education.getHsc());
        existingprs_education.setSslc(prs_education.getSslc());
        Prs_education updatedprs_education = prs_educationRepository.save(existingprs_education);
        return updatedprs_education;
    }

    @Override
    public void delete(Long userId) {
        prs_educationRepository.deleteById(userId);
    }
}
