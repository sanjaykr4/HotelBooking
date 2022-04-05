package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import hotelbooking.dao.HotelBookingDaoInterface;
import hotelbooking.model.Hotel;


@Component

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

	public Hotel UpdateHotel(Hotel hotel) {

		return HBIDao.save(hotel);
	}

	

	@Override
	public List<Hotel> ViewHotel() {
		List<Hotel> hotel=HBIDao.findAll();
		return hotel;
	}

	
	
}
