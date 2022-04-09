package hotelbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hotelbooking.dao.UserDaoInterface;
import hotelbooking.model.User;
import hotelbooking.service.UserService;

@CrossOrigin(origins = "http://localhost:7777")
@RestController
@RequestMapping("/api")
public class UserController {
	
	
	@Autowired
	public UserService userservice;

	@Autowired
	public UserDaoInterface daoInterface;
	
	@PostMapping("/adduser")
	public boolean AddUser(@RequestBody User user) {	
		return userservice.AddUser(user);
	}
	
	@RequestMapping(value = "/updateuser/{id}", method = RequestMethod.PUT)
	public User update(@RequestBody User userDeatils, @PathVariable int id) {
		User user = daoInterface.findById(id).get();
		user.setEmail(userDeatils.getEmail());
		user.setPassword(userDeatils.getPassword());
		user.setUserName(userDeatils.getUserName());
		userservice.updateUser(user);
		return user; 
	}	
	
	@GetMapping("/viewuser")
	public List<User> ViewUsers(){
		return userservice.ViewUsers();
	}

}
