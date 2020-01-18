import React from "react";
import BoxColor from "./BoxColor";

const BoxColorDisplay = () => {
	return (
		<div>
			<BoxColor r={255} g={0} b={0} />
			<BoxColor r={128} g={255} b={0} />
		</div>
	);
};

export default BoxColorDisplay;
