package hotelbooking.service;

import java.util.List;

import hotelbooking.Model.Hotel;

public interface HotelBookingInterface {

	public boolean AddHotel(Hotel hotel);
	public boolean RemoveHotel(int id);
	public boolean UpdateHotel(int id);
	public List<Hotel> ViewHotel(int id);
	
}
