// CreateAdmin Component for add new admin

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import AdminForm from "./AdminForm";

// CreateAdmin Component
const CreateAdmin = () => {
const [formValues, setFormValues] =
	useState({ Hname: '', email: '', roomno: '' })
// onSubmit handler
const onSubmit = adminObject => {
	axios.post(
'http://localhost:4000/admins/create-admin',
	adminObject)
	.then(res => {
		if (res.status === 200)
		alert('Admin successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return admin form
return(
	<AdminForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Admin
	</AdminForm>
)
}

// Export CreateAdmin Component
export default CreateAdmin
