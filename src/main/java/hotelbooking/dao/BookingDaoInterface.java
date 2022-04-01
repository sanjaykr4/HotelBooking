package hotelbooking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotelbooking.model.Booking;


@Repository
public interface BookingDaoInterface extends JpaRepository<Booking, Integer>{

}
