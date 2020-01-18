import React from "react";
import Greetings from "./Greetings";

const GreetingsDisplay = () => {
	return (
		<div>
			<Greetings lang="en" children="John" />
			<Greetings lang="es" children="Juan" />
      <Greetings lang="de" children="Johaness" />

		</div>
	);
};

export default GreetingsDisplay;
