package hotelbooking.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Booking {
	
	@Id
	int bookingId;
	
	String name;
	Date beginDate;
	Date endDate;
	int noOfGuest;
	int phoneNo;
	
	
	public Booking()
	{}
	
	public Booking(int bookingId, String name, Date beginDate, Date endDate, int noOfGuest, int phoneNo) {
		this.bookingId = bookingId;
		this.name = name;
		this.beginDate = beginDate;
		this.endDate = endDate;
		this.noOfGuest = noOfGuest;
		this.phoneNo = phoneNo;
	}
	
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getBeginDate() {
		return beginDate;
	}
	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public int getNoOfGuest() {
		return noOfGuest;
	}
	public void setNoOfGuest(int noOfGuest) {
		this.noOfGuest = noOfGuest;
	}
	public int getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(int phoneNo) {
		this.phoneNo = phoneNo;
	}
	

}
