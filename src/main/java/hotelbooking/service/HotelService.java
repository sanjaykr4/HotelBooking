package hotelbooking.service;

import java.util.List;
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
		
		
		return false;
	}

	public boolean UpdateHotel(int id) {

		return false;
	}

	public List<Hotel> ViewHotel(int id) {
		List<Hotel> hotel=HBIDao.findAll();	
		return hotel;
	}
	
}
