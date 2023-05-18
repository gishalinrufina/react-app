package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Prs_coresprofobj;
import net.javaguides.springboot.repository.Prs_coresprofobjRespository;
import net.javaguides.springboot.service.Prs_coresprofobjService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class Prs_coresprofobjServiceImpl implements Prs_coresprofobjService {
    private Prs_coresprofobjRespository prs_coresprofobjRepository;
    @Override
    public Prs_coresprofobj create(Prs_coresprofobj prs_coresprofobj) {
        return prs_coresprofobjRepository.save(prs_coresprofobj);
    }

    @Override
    public Prs_coresprofobj retrivebyid(Long userId) {
        Optional<Prs_coresprofobj> optionalprs_coresprofobj =prs_coresprofobjRepository.findById(userId);
        return optionalprs_coresprofobj.get();
    }

    @Override
    public List<Prs_coresprofobj> retriveall() {
        return prs_coresprofobjRepository.findAll();
    }

    @Override
    public Prs_coresprofobj update(Prs_coresprofobj prs_coresprofobj) {
        Prs_coresprofobj existingprs_coresprofobj = prs_coresprofobjRepository.findById(prs_coresprofobj.getId()).get();
        existingprs_coresprofobj.setUsercode(prs_coresprofobj.getUsercode());
        existingprs_coresprofobj.setCorrespondence(prs_coresprofobj.getCorrespondence());
        existingprs_coresprofobj.setProfile(prs_coresprofobj.getProfile());
        existingprs_coresprofobj.setObjective(prs_coresprofobj.getObjective());
        Prs_coresprofobj updatedprs_coresprofobj = prs_coresprofobjRepository.save(existingprs_coresprofobj);
        return updatedprs_coresprofobj;
    }

    @Override
    public void delete(Long userId) {
        prs_coresprofobjRepository.deleteById(userId);
    }
}
