import React from "react";
import "./FacebookProfiles.css"


const FacebookProfile = ({profiles}) => {
	return (
		<div>
			{profiles.map((profile, i) => (
				<div className=" FacebookProfile card flex-row mt-3" key={i}>
					<div className="card-header border-0">
						<img
							src={profile.img}
							alt="..."
							className="card-img img-thumbnail"
						/>
					</div>
					<div className="card-block px-2">
						<ul>
							<li>
								<b>First Name:</b> {profile.firstName}
							</li>
							<li>
								<b>Last Name:</b> {profile.lastName}
							</li>
							<li>
								<b>Country:</b> {profile.country}
							</li>
							<li>
								<b>Type:</b> {profile.isStudent ? "Student" : "Teacher"}
							</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default FacebookProfile;