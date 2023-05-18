package net.javaguides.springboot.service;
import net.javaguides.springboot.entity.User;
import java.util.List;
public interface UserService {
    User create(User user);
    User retrivebyid(Long userId);
    List<User> retriveall();
    User update(User user);
    void delete(Long userId);
}
