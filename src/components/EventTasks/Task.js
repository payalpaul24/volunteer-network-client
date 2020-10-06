import React from "react";

const Task = ({ task, deleteTask }) => {
	return (
		<div className="container ">
			<div style={{boxShadow:'4px 10px 5px gray',padding: '30px',background: '#FFFAFA',width:'450px'}} className="d-flex col-md-6">
			<div className="">
				<img style={{width:'180px'}} src={require(`../../images/${task.img}`)} alt="task" />
			</div>
				<div className="">
					<h5>{task.title}</h5>
					<br/>
					<p>{task.date}</p>
				</div>
				<div style={{marginTop:'145px',marginLeft:'20px'}} className="">
				<button style={{marginTop:'50px'}} className="btn btn-secondary" onClick={() => deleteTask(task._id)}>
					Cancel
				</button>
				</div>
			</div>

		</div>
		
	);
};

export default Task;
