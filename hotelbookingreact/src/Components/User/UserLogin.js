import React from "react";
import './UserLogin.css';


function UserLogin() {

    return (
		<div className="background">
        <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h1 className="company_title">HOTEL KHOJO</h1>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>User LogIn</h2>
					</div>
					<div className="row">
						<form control="" className="form-group">
							<div className="row">
								<input type="text" name="username" id="username" className="form__input" placeholder="Username"/>
							</div>
							<div className="row">
							
								<input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							
							<div className="row">
								<input type="submit" value="Submit" className="btn"/>
							</div>
						</form>
					</div>
					<div className="row">
						<p>Don't have an account? <a href="#">Register Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
    )
}
export default UserLogin;