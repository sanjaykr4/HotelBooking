package hotelbooking.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("hotelbooking.dao")

public class HotelMain {

	public static void main(String[] args) {
		SpringApplication.run(HotelMain.class, args);

	}

}
