import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { volunteerData } from "../../fakeData/fakeData";
import Card from "./Card";



const Home = () => {
	const volunteerDataDetails = volunteerData;

	const { user, data } = useContext(UserContext);
	const [eventData, seteventData] = data;

	// If DB is empty then add fake data
	const handleAddBaseData = () => {
		fetch("https://still-stream-80611.herokuapp.com/addBaseData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(volunteerDataDetails),
		});
	};

	// Get data from DB and baseData
	useEffect(() => {
		fetch("https://still-stream-80611.herokuapp.com/home")
			.then((res) => res.json())
			.then((data) => {
				seteventData(data);
				console.log("Home->", data);
			});
	}, []);

	return (
		<main className="container pt-5 mt-2">
				<div className="vn-works-search">
					<h2 className="mb-4 text-center">I grow by helping people in need.</h2>
					<div className="form-group d-flex justify-content-center">
						<input type="search" placeholder="Search ... " className="form-control w-25" />
						<button className="btn btn-primary" type="button" id="button-addon2">
							Search
						</button>
					</div>
				</div>
				<div className="vn-works py-5 mt-2">
				
						<div className="row">
							{
							eventData.map((task) => (
								<Card task={task} key={task.taskId}></Card>
							))
							}
						</div>
				</div>
		</main>
	);
};

export default Home;
