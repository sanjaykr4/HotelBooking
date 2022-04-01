import React from 'react';
import pic1 from './Images/1.jpg';
import pic2 from './Images/2.jpg';
import pic3 from './Images/3.jpg';


export default function Carousel() {
    return (

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>


    )
}
