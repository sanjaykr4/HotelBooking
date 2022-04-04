import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	Hname: Yup.string().required("Rquired"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Rquired"),
	roomno: Yup.number()
	.positive("Invalid room number")
	.integer("Invalid room number")
	.required("Rquired"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="Hname" type="text"
				className="form-control" />
			<ErrorMessage
			name="Hname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="roomno" type="number"
				className="form-control" />
			<ErrorMessage
			name="roomno"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
