import React from "react";
import Random from "./Random";

const RandomDisplay = () => {
	return (
		<div className="card d-flex flex-row border border-dark m-1 rounded-0">
			<Random min={1} max={30} />
			<Random min={30} max={100} />
		</div>
	);
};

export default RandomDisplay;
