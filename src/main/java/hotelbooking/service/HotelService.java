package hotelbooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import hotelbooking.Model.Hotel;
import hotelbooking.dao.HotelBookingDaoInterface;

public class HotelService implements HotelBookingInterface {

	@Autowired
	private HotelBookingDaoInterface HBIDao;
	
	
	public boolean AddHotel(Hotel hotel) {

		HBIDao.save(hotel);
	
		return false;
	}

	public boolean RemoveHotel(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean UpdateHotel(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<Hotel> ViewHotel(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
