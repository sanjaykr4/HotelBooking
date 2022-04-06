import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../Images/1.jpg';
import pic2 from '../Images/2.jpg';
import pic3 from '../Images/3.jpg';


export default function CarouselComponent() {
  return (
    <>
      <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>A social lobby</h3>
                    <p>Look for an area away from the drafty entrance, with couches and wifi. Bar service for the social lobby is nice, too. Enjoy coffee from The Market or cocktails from Augie’s Tavern in our spacious and comfortable lobby.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Hotel pools give you the chance to relax</h3>
                    <p>With all the sea sports and activities, beaches become busy and loud whereas pools often offer you the opportunity to read the paper, enjoy a cocktail, or have dinner even when it gets late at night.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Distinctive, Well-Appointed Guest Rooms</h3>
                    <p>One way the better hotels and resorts distinguish themselves from low- and mid-range chains is with distinctive accents and amenities that help you experience the local flavor. Harrison says she looks for “refined goods and services that show true taste and respect.”</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

      </div>

    </>

  )
}
