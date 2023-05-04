package net.javaguides.springboot.service;
import net.javaguides.springboot.entity.Usersetting;
import java.util.List;

public interface UsersettingService {
    Usersetting createusersetting(Usersetting usersetting);
    Usersetting getusersettingById(Long userId);
    List<Usersetting> getAllusersettings();
    Usersetting updateusersetting(Usersetting usersetting);
    void deleteusersetting(Long userId);
}
