package net.javaguides.springboot.repository;

import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.entity.Usersetting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersettingRepository extends JpaRepository<Usersetting, Long> {

}
