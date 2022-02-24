package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import hotelbooking.Model.Hotel;
import hotelbooking.dao.HotelBookingDaoInterface;

public class HotelService implements HotelBookingInterface {

	@Autowired
	private HotelBookingDaoInterface HBIDao;
	
	
	public boolean AddHotel(Hotel hotel) {

		boolean flag=false;
		try {
			HBIDao.save(hotel);
			flag=true;			
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return flag;
	}

	public boolean RemoveHotel(int id) {
	
		boolean flag=false;
		try {
			HBIDao.deleteById(id);
			flag=true;			
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return flag;
	}

	public boolean UpdateHotel(Hotel hotel) {

		hotel.setHotelName(hotel.getHotelName());
		hotel.setHotelAddress(hotel.getHotelAddress());
		hotel.setHotelPrice(hotel.getHotelPrice());
		hotel.setHotelRating(hotel.getHotelRating());
		
		
		return false;
	}

	public Optional<Hotel> ViewHotelById(int id) {
		Optional<Hotel> hotel=HBIDao.findById(id);
		return hotel;
	}

	@Override
	public List<Hotel> ViewHotel() {
		List<Hotel> hotel=HBIDao.findAll();
		return hotel;
	}
	
}
