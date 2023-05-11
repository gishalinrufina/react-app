package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Submenusetting;
import net.javaguides.springboot.repository.SubmenusettingRepository;
import net.javaguides.springboot.service.SubmenusettingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class SubmenusettingServiceImpl implements SubmenusettingService {
    private SubmenusettingRepository submenusettingRepository;
    public Submenusetting create(Submenusetting submenusetting) {
        return submenusettingRepository.save(submenusetting);
    }
    public Submenusetting retrivebyid(Long userId) {
        Optional<Submenusetting> optionalUser = submenusettingRepository.findById(userId);
        return optionalUser.get();
    }
    public List<Submenusetting>retriveall() {
        return submenusettingRepository.findAll();
    }

    @Override
    public Submenusetting update(Submenusetting submenusetting) {
        Submenusetting existingSubmenusetting = submenusettingRepository.findById(submenusetting.getId()).get();
        existingSubmenusetting.setMenucode(submenusetting.getMenucode());
        existingSubmenusetting.setSubmenuname	(submenusetting.getSubmenuname());
        existingSubmenusetting.setUrl(submenusetting.getUrl());
        Submenusetting updatedSubmenusetting = submenusettingRepository.save(existingSubmenusetting);
        return updatedSubmenusetting;
    }

    public void delete(Long userId) {
        submenusettingRepository.deleteById(userId);
    }
}
