import React from "react";

function AdminLogin() {

	return (


		<div className="container my-5" style={{width:"700px"}}>

			<h1 className="text-center">Admin Login</h1>
			<form>

				<div className="form-outline mb-4">
				    <label className="form-label" for="form2Example1"><h5>User Name</h5></label>
					<input type="email" id="form2Example1" className="form-control" placeholder="Enter User Name" />
					
				</div>


				<div className="form-outline mb-4">
				    <label className="form-label" for="form2Example2"><h5>Password</h5></label>
					<input type="password" id="form2Example2" className="form-control" placeholder="Enter Password" />
					
				</div>


				<div className="row mb-4">
					<div className="col d-flex justify-content-center">

						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
							<label className="form-check-label" for="form2Example31"> Remember me </label>
						</div>
					</div>

					<div className="col">

						<a href="#!">Forgot password?</a>
					</div>
				</div>


				<button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>


				<div className="text-center">
				<h5><p>Not a member? <a href="/adminregister">Register</a></p></h5>
				</div>
			</form>


		</div>
	)
}
export default AdminLogin;