import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminTableRow from "./AdminTableRow";

const AdminList = () => {
const [admins, setAdmins] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/admins/")
	.then(({ data }) => {
		setAdmins(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return admins.map((res, i) => {
	return <AdminTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>HName</th>
			<th>Email</th>
			<th>Room No</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default AdminList;
