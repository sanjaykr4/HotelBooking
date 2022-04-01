import React from 'react'
import '../Components/Feedback.css'

export default function Feedback() {
    return (
        <>
            
                    <div className="feedback">
                        <section id="contact">
                            <div className="section-content">
                                <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                                <h3>Got an idea, suggestions or general feedback? Share it here!</h3>
                            </div>
                            <div className="contact-section">
                                <div className="container">
                                    <form>

                                        <div className="row">

                                            <div className="col-8">
                                                <div className="col-md-8 form-line">
                                                    <div className="form-group">
                                                        <label for="exampleInputUsername">Your name</label>
                                                        <input type="text" className="form-control" id="" placeholder=" Enter Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail">Email Address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="telephone">Mobile No.</label>
                                                        <input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label for="description"> Message</label>
                                                        <textarea className="form-control" id="description" placeholder="Enter Your Message"></textarea>
                                                    </div>
                                                    <div>
                                                        <button type="button" className="btn btn-success submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>


             

        </>

    )
}
