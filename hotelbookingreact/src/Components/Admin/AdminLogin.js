import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminLogin() {
	const[username,setusername]=useState('');
	const[password,setpassword]=useState('');
	
	const handleusernamechange=(e)=>{
		setusername(e.target.value);
	}

	const handlepasswordchange=(e)=>{
		setpassword(e.target.value);
	}
    
     const navigate = useNavigate();

	const handleformsubmit=(e)=>{
		e.preventDefault();
        if (username==='admin') {
			if(password==='admin')
			{
				navigate('/curdhotel')
			}
		} else {
			alert('Kindly enter correct details!!!');
		}

	}


	return (
		<div className="container my-5" style={{width:"500px"}}>

			<h2 className="text-center my-5" >Admin Login</h2>
			<form name="myForm" method="post" >

				<div className="form-outline mb-4">
					<input type="email" id="form2Example1" className="form-control" placeholder="UserName" onChange={handleusernamechange} value={username} />
					
				</div>


				<div className="form-outline mb-4">
					<input type="password" id="form2Example2" className="form-control" placeholder="Password" onChange={handlepasswordchange} value={password} />
					
				</div>


				<div className="row mb-4">
					<div className="col d-flex justify-content-center">

						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
							<label className="form-check-label" for="form2Example31"> Remember me </label>
						</div>
					</div>

					
				</div>


				<button type="button" className="btn btn-primary btn-block mb-4"  onClick={handleformsubmit} >Sign in</button>


				
			</form>


		</div>
	)
}
export default AdminLogin;