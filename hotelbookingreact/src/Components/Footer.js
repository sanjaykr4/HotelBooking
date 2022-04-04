import React from 'react'
import '../Components/Footer.css'

export default function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 m-b-30">
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                About us
                            </div>
                            <div className='aboutus'>
                            <p className="white-text">
                                Nurtured from the seed of a single great idea - to empower the traveller - Hotel Khojo is a pioneer in India’s online travel industry. Founded in the year 2022, Hotel Khojo came to life to empower the Indian traveller with instant bookings and comprehensive choices.
                                Hotel Khojo offered travellers the convenience of booking travel online with a few clicks.
                                Hotel Khojo’s rise has been led by the vision and the spirit of each one of its employees, for whom no idea was too big and no problem too difficult. With untiring determination, Hotel Khojo has proactively diversified its product offering, adding a variety of online and offline products and services. Hotel Khojo has stayed ahead of the curve by continually evolving its technology to meet the ever-changing demands of the rapidly developing global travel market, steadily establishing itself as India’s leading online travel company.
                            </p>
                            </div>
                        </div>
                        <div className="col-md-3 m-b-30">
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                Latest themes
                            </div>
                            <div className="footer-links">
                                <a href="#">
                                    Appointment
                                </a>
                                <a href="#">
                                    Help center
                                </a>
                                <a href="#">
                                    Quality
                                </a>
                                
                            </div>
                        </div>
                        <div className="col-md-3 m-b-30">
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                Quick Links
                            </div>
                            <div className="footer-links">
                               
                                <a href="#">
                                    FAQ
                                </a>
                                <a href="#">
                                    Terms & conditions
                                </a>
                                <a href="#">
                                    Privacy policy
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 m-b-30">
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                Support
                            </div>
                            <div className="footer-links">
                                
                                <a href="#">
                                    Login
                                </a>
                                <a href="#">
                                    View all
                                </a>
                                <a href="#">
                                    Support forum
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                Copyright © 2022, All Rights Reserved
            </div>


        </>
    )
}
