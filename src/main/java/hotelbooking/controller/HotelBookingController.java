package hotelbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotelbooking.Model.Hotel;
import hotelbooking.service.HotelService;

@RestController
public class HotelBookingController{

	@Autowired
	public HotelService hotelservice;
	
	
	@PostMapping("/addHotel")
	public boolean AddHotel(@RequestBody Hotel hotel) {
		
		return hotelservice.AddHotel(hotel);
	}

	@GetMapping("/removehotel/{id}")
	public boolean RemoveHotel(@PathVariable int id) {
		
		return hotelservice.RemoveHotel(id);
	}

	@PostMapping("/updatehotel")
	public boolean UpdateHotel(@RequestBody Hotel hotel) {
		
		return hotelservice.UpdateHotel(hotel);
	}

	@GetMapping("/viewhotel")
	public List<Hotel> ViewHotel() {
		
		return hotelservice.ViewHotel();
	}
	
	

}
