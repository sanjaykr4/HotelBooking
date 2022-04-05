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

import hotelbooking.dao.HotelBookingDaoInterface;
import hotelbooking.model.Hotel;
import hotelbooking.model.User;
import hotelbooking.service.HotelService;

@RestController
public class HotelBookingController {

	@Autowired
	public HotelService hotelservice;

	@Autowired
	public HotelBookingDaoInterface daointerface;

	@PostMapping("/addHotel")
	public boolean AddHotel(@RequestBody Hotel hotel) {
		return hotelservice.AddHotel(hotel);
	}

	@GetMapping("/removehotel/{id}")
	public boolean RemoveHotel(@PathVariable int id) {
		return hotelservice.RemoveHotel(id);
	}

	@RequestMapping(value = "/updatehotel/{id}", method = RequestMethod.PUT)
	public Hotel updateLocation(@RequestBody Hotel hotelDetails, @PathVariable int id) {
		Hotel hotel = daointerface.findById(id).get();
		hotel.setHotelName(hotelDetails.getHotelName());
		hotel.setHotelAddress(hotelDetails.getHotelAddress());
		hotel.setHotelRating(hotelDetails.getHotelRating());
		hotel.setHotelPrice(hotelDetails.getHotelPrice());
		hotelservice.UpdateHotel(hotel);
		return hotel;
	}

	@GetMapping("/viewhotel")
	public List<Hotel> ViewHotel() {
		return hotelservice.ViewHotel();
	}

}
