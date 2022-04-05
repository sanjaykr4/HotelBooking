package hotelbooking.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "hotelbooking.dao")
@EntityScan("hotelbooking.model")
@ComponentScan(basePackages = "hotelbooking.service")
@ComponentScan(basePackages = "hotelbooking.controller")

public class HotelMain {
	public static void main(String[] args) {
		SpringApplication.run(HotelMain.class, args);
	}
}
