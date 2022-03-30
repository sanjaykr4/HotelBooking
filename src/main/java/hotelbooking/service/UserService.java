package hotelbooking.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import hotelbooking.dao.UserDaoInterface;
import hotelbooking.model.User;

public abstract class UserService implements UserDaoInterface {
	
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
}
