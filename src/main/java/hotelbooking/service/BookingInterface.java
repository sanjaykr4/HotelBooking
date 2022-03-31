package hotelbooking.service;

import java.util.List;
import hotelbooking.model.Booking;

public interface BookingInterface {
	
	public boolean AddBooking(Booking booking);
	public boolean RemoveBooking(int bookingid);
	public boolean UpdateBooking(Booking booking);
	public List<Booking> ViewBooking();

}
