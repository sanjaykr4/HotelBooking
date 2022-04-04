import React from "react";

function AdminLogin() {

	return (


		<div className="container my-5" style={{width:"700px"}}>

			<h2 className="text-center">Admin Login</h2>
			<form>

				<div className="form-outline mb-4">
					<input type="email" id="form2Example1" className="form-control" placeholder="Enter User Name" />
					<label className="form-label" for="form2Example1">User Name</label>
				</div>


				<div className="form-outline mb-4">
					<input type="password" id="form2Example2" className="form-control" placeholder="Enter Password" />
					<label className="form-label" for="form2Example2">Password</label>
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
					<p>Not a member? <a href="/adminregister">Register</a></p>
				</div>
			</form>


		</div>
	)
}
export default AdminLogin;