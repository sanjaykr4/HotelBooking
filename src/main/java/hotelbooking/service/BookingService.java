package hotelbooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import hotelbooking.dao.BookingDaoInterface;
import hotelbooking.model.Booking;

public class BookingService implements BookingInterface{
	
	@Autowired
	private BookingDaoInterface bookingDao;

	@Override
	public boolean AddBooking(Booking booking) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean RemoveBooking(int bookingid) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean UpdateBooking(Booking booking) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Booking> ViewBooking() {
		// TODO Auto-generated method stub
		return null;
	}

	
}
