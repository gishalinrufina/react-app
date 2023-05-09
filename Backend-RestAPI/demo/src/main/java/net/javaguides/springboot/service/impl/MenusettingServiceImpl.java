package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Menusetting;
import net.javaguides.springboot.repository.MenusettingRespository;
import net.javaguides.springboot.service.MenusettingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class MenusettingServiceImpl implements MenusettingService {
    private MenusettingRespository menusettingRepository;
    @Override
    public Menusetting create(Menusetting menusetting) {
        return menusettingRepository.save(menusetting);
    }

    @Override
    public Menusetting retrivebyid(Long userId) {
        Optional<Menusetting> optionalemnusetting =menusettingRepository.findById(userId);
        return optionalemnusetting.get();
    }

    @Override
    public List<Menusetting> retriveall() {
        return menusettingRepository.findAll();
    }

    @Override
    public Menusetting update(Menusetting menusetting) {
        Menusetting existingmenusetting = menusettingRepository.findById(menusetting.getId()).get();
        existingmenusetting.setMenucode(menusetting.getMenucode());
        existingmenusetting.setMenuname(menusetting.getMenuname());
        Menusetting updatedmenusetting = menusettingRepository.save(existingmenusetting);
        return updatedmenusetting;
    }

    @Override
    public void delete(Long userId) {
        menusettingRepository.deleteById(userId);
    }
}
