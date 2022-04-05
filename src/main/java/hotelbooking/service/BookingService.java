package hotelbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import hotelbooking.dao.BookingDaoInterface;
import hotelbooking.model.Booking;


@Component
//@Service
public class BookingService implements BookingInterface{
	
	@Autowired
	private BookingDaoInterface bookingDao;

	@Override
	public boolean AddBooking(Booking booking) {
		boolean flag=false;
		try {
			bookingDao.save(booking);
			flag=true;			
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
	public boolean UpdateBooking(Booking booking) {
		Optional<Booking> booking1 = bookingDao.findById(booking.getBookingId());
		Booking booking2 =booking1.get();
		
		booking2.setBeginDate(booking2.getBeginDate());
		booking2.setName(booking2.getName());
		booking2.setNoOfGuest(booking2.getNoOfGuest());
		booking2.setPhoneNo(booking2.getPhoneNo());
		booking2.setEndDate(booking2.getEndDate());
		
		
		return false;
	}

	@Override
	public List<Booking> ViewBooking() {
		List<Booking> booking = bookingDao.findAll();
		return booking;
	}

	
}
