import React from "react";
import './AdminSignUp.css';

function AdminSignUp() {

    return(
        <div className="container">
    <h1 className="title">Admin Registration</h1>
	<div className="col-lg-12 well">
	<div className="row">
				<form>
					<div className="col-sm-12">
						<div className="row">
							<div className="col-sm-6 form-group">
							<h5><label>First Name</label></h5>
								<input type="text" placeholder="Enter First Name Here.." className="form-control"/>
							</div>
							<div className="col-sm-6 form-group">
							<h5><label>Last Name</label></h5>
								<input type="text" placeholder="Enter Last Name Here.." className="form-control"/>
							</div>
						</div>					
						<div className="form-group">
						<h5><label>Address</label></h5>
							<textarea placeholder="Enter Address Here.." rows="3" className="form-control"></textarea>
						</div>	
						<div className="row">
							<div className="col-sm-4 form-group">
							<h5><label>City</label></h5>
								<input type="text" placeholder="Enter City Name Here.." className="form-control"/>
							</div>	
							<div className="col-sm-4 form-group">
							<h5><label>State</label></h5>
								<input type="text" placeholder="Enter State Name Here.." className="form-control"/>
							</div>	
							<div className="col-sm-4 form-group">
							<h5><label>Zip</label></h5>
								<input type="text" placeholder="Enter Zip Code Here.." className="form-control"/>
							</div>		
						</div>
									
					<div className="form-group">
					<h5><label>Phone Number</label></h5>
						<input type="text" placeholder="Enter Phone Number Here.." className="form-control"/>
					</div>		
					<div className="form-group">
					<h5><label>Email Address</label></h5>
						<input type="text" placeholder="Enter Email Address Here.." className="form-control"/>
					</div>	
					<div className="form-group">
					<h5><label>Website</label></h5>
						<input type="text" placeholder="Enter Website Name Here.." className="form-control"/>
					</div>
					<button type="button" className="btn btn-lg btn-info">Submit</button>					
					</div>
				</form> 
				<div classNameName="register">
						<h5><p>Already Registered? <a href="/adminlogin">LogIn</a></p></h5>
					</div>
				</div>
	</div>
	</div>
    )
}
export default AdminSignUp;