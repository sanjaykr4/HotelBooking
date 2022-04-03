import React from "react";
import './UserSignUp.css';

function UserSignUp() {

    return(
        <div className="container">
    <h1 className="title">User Registration</h1>
	<div className="col-lg-12 well">
	<div className="row">
				<form>
					<div className="col-sm-12">
						<div className="row">
							<div className="col-sm-6 form-group">
								<label>First Name</label>
								<input type="text" placeholder="Enter First Name Here.." className="form-control"/>
							</div>
							<div className="col-sm-6 form-group">
								<label>Last Name</label>
								<input type="text" placeholder="Enter Last Name Here.." className="form-control"/>
							</div>
						</div>					
									
					<div className="form-group">
						<label>Phone Number</label>
						<input type="text" placeholder="Enter Phone Number Here.." className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Email Address</label>
						<input type="text" placeholder="Enter Email Address Here.." className="form-control"/>
					</div>	
                    <div className="form-group">
						<label>Password</label>
						<input type="password" placeholder="Enter Password Here.." className="form-control"/>
					</div>	
		
					<button type="button" className="btn btn-lg btn-submit">Submit</button>					
					</div>
				</form> 
                <div className="register">
						<h5><p>Already Registered? <a href="#">LogIn</a></p></h5>
					</div>
				</div>
               
	</div>
	</div>
    )
}
export default UserSignUp;