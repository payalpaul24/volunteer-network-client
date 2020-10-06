import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task }) => {
	return (
		<div className="col-md-3 col-sm-6">
			<Link to={`/events/${task._id}`}>
				<div className="vn-works-card">
					<img style={{ maxWidth: "100%" }} src={require(`../../images/${task.img}`)} alt="task" />
					<h6 className="bg-primary text-light p-3">{task.title}</h6>
				</div>
			</Link>
		</div>
	);
};

export default Card;
