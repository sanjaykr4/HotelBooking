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
//@Service
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
	
	public boolean UpdateUser(User user) {

		Optional<User> user1 = UIDao.findById(user.getUserId());
		
		User user2 = user1.get();
		
		user2.setUserName(user2.getUserName());
		user2.setPassword(user2.getPassword());
		user2.setEmail(user2.getEmail());			
		
		return false;
	}

	
	public List<User> ViewUsers() {
		List<User> user = UIDao.findAll();
		return user;
	}

	
	
	
}
