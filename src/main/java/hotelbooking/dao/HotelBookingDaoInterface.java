package hotelbooking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotelbooking.Model.Hotel;

@Repository
public interface HotelBookingDaoInterface extends JpaRepository<Hotel, Integer>{

}
