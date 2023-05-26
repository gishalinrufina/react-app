package net.javaguides.springboot.service;
import net.javaguides.springboot.entity.Menusetting;
import net.javaguides.springboot.entity.Usersetting;
import java.util.List;

public interface UsersettingService {
    Usersetting create(Usersetting usersetting);
    Usersetting retrivebyid(Long userId);
    List<Usersetting> retriveall();
    Usersetting update(Usersetting usersetting);
    void delete(Long userId);
}
