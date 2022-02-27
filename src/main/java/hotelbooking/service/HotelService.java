package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import hotelbooking.dao.HotelBookingDaoInterface;
import hotelbooking.model.Hotel;

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

		Optional<Hotel> hotel1 = HBIDao.findById(hotel.getHotelId());
		
		Hotel hotel2 = hotel1.get();
		
		hotel2.setHotelName(hotel2.getHotelName());
		hotel2.setHotelPrice(hotel2.getHotelPrice());
		hotel2.setHotelAddress(hotel2.getHotelAddress());
		hotel2.setHotelRating(hotel2.getHotelRating());
		hotel2.setHotelImage(hotel2.getHotelImage());
			
		
		return false;
	}

	

	@Override
	public List<Hotel> ViewHotel() {
		List<Hotel> hotel=HBIDao.findAll();
		return hotel;
	}

	
	
}
