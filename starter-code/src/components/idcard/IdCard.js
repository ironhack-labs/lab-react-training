import React from "react";

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
	return (
		<div className="card d-flex flex-row border border-dark m-1 rounded-0">
      <div className=" h-100">

			<img src={picture} alt="Profile" className="profile-img" />
			</div>
      <div className="profile-list column">
				<ul>
					<li><b>First Name: </b>{firstName}</li>
					<li><b>Last Name: </b>{lastName}</li>
					<li><b>Gender: </b>{gender}</li>
					<li><b>Height:</b>{height}</li>
					<li><b>Birth</b>{birth}</li>
				</ul>
			</div>
		</div>
	);
};

export default IdCard

