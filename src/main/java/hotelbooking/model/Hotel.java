package hotelbooking.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "hotels")
public class Hotel {

	@Id
	private int hotelId;
	private String hotelName;
	private String hotelAddress;
	private float hotelPrice;
	private int hotelRating;
	
	
	public Hotel() {}
	
	public Hotel(int hotelId, String hotelName, String hotelAddress, float hotelPrice, int hotelRating) {
		this.hotelId = hotelId;
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
		this.hotelPrice = hotelPrice;
		this.hotelRating = hotelRating;
		
	}
	
	
	
	public int getHotelId() {
		return hotelId;
	}
	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public String getHotelAddress() {
		return hotelAddress;
	}
	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}
	public float getHotelPrice() {
		return hotelPrice;
	}
	public void setHotelPrice(float hotelPrice) {
		this.hotelPrice = hotelPrice;
	}
	public int getHotelRating() {
		return hotelRating;
	}
	public void setHotelRating(int hotelRating) {
		this.hotelRating = hotelRating;
	}
	
	
	
}
