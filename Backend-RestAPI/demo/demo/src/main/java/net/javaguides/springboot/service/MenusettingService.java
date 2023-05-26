package net.javaguides.springboot.service;
import net.javaguides.springboot.entity.Menusetting;
import java.util.List;
public interface MenusettingService {
   Menusetting mcreate(Menusetting menusetting);
    Menusetting mretrivebyid(Long userId);
    List<Menusetting> mretriveall();
    Menusetting mupdate(Menusetting menusetting);
    void mdelete(Long userId);
}
