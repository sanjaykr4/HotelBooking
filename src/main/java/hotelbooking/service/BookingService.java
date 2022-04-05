package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import hotelbooking.dao.BookingDaoInterface;
import hotelbooking.model.Booking;


@Component
public class BookingService implements BookingInterface{
	
	@Autowired
	private BookingDaoInterface bookingDao;

	@Override
	public boolean AddBooking(Booking booking) {
		boolean flag = false;
		try {
			bookingDao.save(booking);
			flag = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public boolean RemoveBooking(int bookingid) {
		boolean flag=false;
		try {
			bookingDao.deleteById(bookingid);
			flag=true;			
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return flag;
	}

	@Override
	public Booking UpdateBooking(Booking booking) {
		return bookingDao.save(booking);
	}

	@Override
	public List<Booking> ViewBooking() {
		List<Booking> booking = bookingDao.findAll();
		return booking;
	}

	
}
