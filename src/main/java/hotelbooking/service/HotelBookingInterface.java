package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import hotelbooking.Model.Hotel;

public interface HotelBookingInterface {

	public boolean AddHotel(Hotel hotel);
	public boolean RemoveHotel(int id);
	public boolean UpdateHotel(Hotel hotel);
	public List<Hotel> ViewHotel();
	//public Optional<Hotel> ViewHotelById(int id);
	
}
