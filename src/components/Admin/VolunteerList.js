import React from "react";

const VolunteerList = ({ tasks, deleteHandler }) => {
	return (
		<div className="admin-vol-list">
			<h5 className="py-lg-4 pb-2">Volunteer register list</h5>
			<div className="">
				<table className="table">
					<thead className="thead-light">
						<tr className="thead-light">
							<th scope="col">Name</th>
							<th scope="col">Email ID</th>
							<th scope="col">Registration Date</th>
							<th scope="col">Volunteer task</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{
							tasks.map((task) => (
								<tr key={task._id}>
									<td>{task.name}</td>
									<td>{task.email}</td>
									<td>{task.date}</td>
									<td>{task.title}</td>
									<td>
										<button className="btn btn-danger" onClick={() => deleteHandler(task._id)}>
											<img
												src={require("../../images/logos/trash-2.png")}
												alt="delete"
												style={{ width: "21px" }}
											/>
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default VolunteerList;
