package hotelbooking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotelbooking.model.User;

@Repository
public interface UserDaoInterface extends JpaRepository<User, Integer>{

}
