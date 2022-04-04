import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminTableRow = (props) => {
const { _id, Hname, email, roomno } = props.obj;

const deleteAdmin = () => {
	axios
	.delete(
"http://localhost:4000/admins/delete-admin/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Admin successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{Hname}</td>
	<td>{email}</td>
	<td>{roomno}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-admin/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteAdmin}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default AdminTableRow;
