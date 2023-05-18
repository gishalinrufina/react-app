package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Menusetting;
import net.javaguides.springboot.entity.Submenusetting;
import net.javaguides.springboot.entity.Submenusetting;
import net.javaguides.springboot.repository.SubmenusettingRespository;
import net.javaguides.springboot.service.SubmenusettingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class SubmenusettingServiceImpl implements SubmenusettingService {
    private SubmenusettingRespository submenusettingRepository;
    @Override
    public Submenusetting create(Submenusetting submenusetting) {
        return submenusettingRepository.save(submenusetting);
    }

    @Override
    public Submenusetting retrivebyid(Long userId) {
        Optional<Submenusetting> optionalsubmenusetting =submenusettingRepository.findById(userId);
        return optionalsubmenusetting.get();
    }

    @Override
    public List<Submenusetting> retriveall() {
        return submenusettingRepository.findAll();
    }


    @Override
    public Submenusetting update(Submenusetting submenusetting) {
        Submenusetting existingsubmenusetting = submenusettingRepository.findById(submenusetting.getId()).get();
        existingsubmenusetting.setMenucode(submenusetting.getMenucode());
        existingsubmenusetting.setSubmenuname(submenusetting.getSubmenuname());
        existingsubmenusetting.setUrl(submenusetting.getUrl());
        Submenusetting updatedsubmenusetting = submenusettingRepository.save(existingsubmenusetting);
        return updatedsubmenusetting;
    }
    @Override
    public void delete(Long userId) {
        submenusettingRepository.deleteById(userId);
    }
}

