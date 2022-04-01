package hotelbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotelbooking.model.User;
import hotelbooking.service.UserService;

@RestController
public class UserController {
	
	
	@Autowired
	public UserService userservice;
	
	@PostMapping("/adduser")
	public boolean AddUser(@RequestBody User user) {
		
		return userservice.AddUser(user);
	}
	

	@PostMapping("/updateuser")
	public boolean UpdateUser(@RequestBody User user) {
		
		return userservice.UpdateUser(user);
	}
	
	@GetMapping("/viewuser")
	public List<User> ViewUsers(){
		
		return userservice.ViewUsers();
	}

}
