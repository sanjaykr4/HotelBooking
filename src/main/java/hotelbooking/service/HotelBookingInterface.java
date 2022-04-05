package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import hotelbooking.model.Hotel;

public interface HotelBookingInterface {

	public boolean AddHotel(Hotel hotel);
	public boolean RemoveHotel(int id);
	public Hotel UpdateHotel(Hotel hotel);
	public List<Hotel> ViewHotel();
	//public Optional<Hotel> ViewHotelById(int id);
	
}
