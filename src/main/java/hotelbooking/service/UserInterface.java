package hotelbooking.service;

import java.util.List;

import hotelbooking.model.User;

public interface UserInterface {
	
	public boolean AddUser(User user);
	
	public boolean UpdateUser(User user);
	
	public List<User> ViewUsers();
	

}
