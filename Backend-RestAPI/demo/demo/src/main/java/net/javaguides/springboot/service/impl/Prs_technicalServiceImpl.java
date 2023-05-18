
package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_technical;
import net.javaguides.springboot.repository.Prs_technicalRespository;
import net.javaguides.springboot.service.Prs_technicalService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class Prs_technicalServiceImpl implements Prs_technicalService {
    private Prs_technicalRespository prs_technicalRepository;
    @Override
    public Prs_technical create(Prs_technical prs_technical) {
        return prs_technicalRepository.save(prs_technical);
    }

    @Override
    public Prs_technical retrivebyid(Long userId) {
        Optional<Prs_technical> optionalprs_technical =prs_technicalRepository.findById(userId);
        return optionalprs_technical.get();
    }

    @Override
    public List<Prs_technical> retriveall() {
        return prs_technicalRepository.findAll();
    }

    @Override
    public Prs_technical update(Prs_technical prs_technical) {
        Prs_technical existingprs_technical = prs_technicalRepository.findById(prs_technical.getId()).get();
        existingprs_technical.setUsercode(prs_technical.getUsercode());
        existingprs_technical.setType(prs_technical.getType());
        existingprs_technical.setDescription(prs_technical.getDescription());
        Prs_technical updatedprs_technical = prs_technicalRepository.save(existingprs_technical);
        return updatedprs_technical;
    }

    @Override
    public void delete(Long userId) {
        prs_technicalRepository.deleteById(userId);
    }
}
