package net.javaguides.springboot.service;
import net.javaguides.springboot.entity.Menusetting;
import java.util.List;
public interface MenusettingService {
   Menusetting create(Menusetting menusetting);
    Menusetting retrivebyid(Long userId);
    List<Menusetting> retriveall();
    Menusetting update(Menusetting menusetting);
    void delete(Long userId);
}
