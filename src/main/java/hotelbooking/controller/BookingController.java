package hotelbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hotelbooking.dao.BookingDaoInterface;
import hotelbooking.dao.HotelBookingDaoInterface;
import hotelbooking.model.Booking;
import hotelbooking.model.Hotel;
import hotelbooking.service.BookingService;

@RestController
public class BookingController  {
    
	@Autowired
	private BookingService bookingservice;
	
	@Autowired
	public BookingDaoInterface daointerface;
	
	@PostMapping("/addbooking")
	public boolean AddBooking(@RequestBody Booking booking) {
		return bookingservice.AddBooking(booking);
	}

	@GetMapping("/removebooking/{id}")
	public boolean RemoveBooking(@PathVariable int bookingid) {
		return bookingservice.RemoveBooking(bookingid);
	}

	@RequestMapping(value = "/updatebooking/{id}", method = RequestMethod.PUT)
	public Booking updateBooking(@RequestBody Booking bookingDeatils, @PathVariable int id) {
		Booking booking = daointerface.findById(id).get();
		booking.setName(bookingDeatils.getName());
		booking.setBeginDate(bookingDeatils.getBeginDate());
		booking.setEndDate(bookingDeatils.getEndDate());
		booking.setNoOfGuest(bookingDeatils.getNoOfGuest());
        booking.setPhoneNo(bookingDeatils.getPhoneNo());
        bookingservice.UpdateBooking(booking);
		return booking; 
	}

	@GetMapping("/viewbooking")
	public List<Booking> ViewBooking() {
		return bookingservice.ViewBooking();
	}

}
