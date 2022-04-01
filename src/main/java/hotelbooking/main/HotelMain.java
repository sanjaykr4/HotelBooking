package hotelbooking.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages ="hotelbooking.dao")
@EntityScan("hotelbooking.model")

public class HotelMain {

	public static void main(String[] args) {
		SpringApplication.run(HotelMain.class, args);

	}

}
