import React from "react";

const Random = ({ max, min }) => {
	return (
		<div className="card d-flex border border-dark m-1 rounded-0">
			<p>
				Random value betweem {min} and {max} =>{" "}
				{Math.floor(Math.random() * (max - min + 1)) + min}
			</p>
		</div>
	);
};

export default Random;
