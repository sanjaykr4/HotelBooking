package hotelbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotelbooking.model.Booking;
import hotelbooking.service.BookingService;

@RestController
public class BookingController  {
    
	@Autowired
	private BookingService bookingservice;
	
	@PostMapping("/addbooking")
	public boolean AddBooking(@RequestBody Booking booking) {
		return bookingservice.AddBooking(booking);
	}

	@GetMapping("/removebooking/{id}")
	public boolean RemoveBooking(@PathVariable int bookingid) {
		
		return bookingservice.RemoveBooking(bookingid);
	}

	@PostMapping("/updatebooking")
	public boolean UpdateBooking(@RequestBody Booking booking) {
		// TODO Auto-generated method stub
		return bookingservice.UpdateBooking(booking);
	}

	@GetMapping("/viewbooking")
	public List<Booking> ViewBooking() {
		
		return bookingservice.ViewBooking();
	}

}
