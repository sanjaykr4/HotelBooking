package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import hotelbooking.dao.UserDaoInterface;
import hotelbooking.model.Booking;
import hotelbooking.model.User;

@Component
public class UserService implements UserInterface {
	
	@Autowired
	private UserDaoInterface UIDao;
	
	
	public boolean AddUser(User user) {

		boolean flag=false;
		try {
			UIDao.save(user);
			flag=true;			
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return flag;
	}
	
	public User updateUser(User user){		
			
		return UIDao.save(user);
  }
	
	public List<User> ViewUsers() {
		List<User> user = UIDao.findAll();
		return user;
	}

}
