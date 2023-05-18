package net.javaguides.springboot.service.impl;
import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Usersetting;
import net.javaguides.springboot.repository.UsersettingRepository;
import net.javaguides.springboot.service.UsersettingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UsersettingServiceImpl implements UsersettingService {
    private UsersettingRepository usersettingRepository;
    public Usersetting create(Usersetting usersetting) {
        return usersettingRepository.save(usersetting);
    }
    public Usersetting retrivebyid(Long userId) {
        Optional<Usersetting> optionalUser = usersettingRepository.findById(userId);
        return optionalUser.get();
    }

    public List<Usersetting>retriveall() {
        return usersettingRepository.findAll();
    }

    @Override
    public Usersetting update(Usersetting usersetting) {
        Usersetting existingUser = usersettingRepository.findById(usersetting.getId()).get();
        existingUser.setUsername(usersetting.getUsername());
        existingUser.setPassword(usersetting.getPassword());
        existingUser.setEmail(usersetting.getEmail());
        existingUser.setMobileno(usersetting.getMobileno());
        Usersetting updatedUser = usersettingRepository.save(existingUser);
        return updatedUser;
    }

    public void delete(Long userId) {
        usersettingRepository.deleteById(userId);
    }
}
