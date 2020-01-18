import React from "react";

const Greetings = ({ children, lang }) => {
	if (lang === "es") {
		return (
  
  <div className="card d-flex flex-row border border-dark m-1 rounded-0">
        <p className="pl-5">
					<b>Hola </b>
					{children}
				</p>
			</div>
		);
	} else if (lang === "en") {
		return (
  
  <div className="card d-flex flex-row border border-dark m-1 rounded-0">
        <p className="pl-5">
					<b>Hello</b> {children}
				</p>
			</div>
		);
	} else if (lang === "de") {
		return (
  
  <div className="card d-flex flex-row border border-dark m-1 rounded-0">
        <p className="pl-5">
					<b>Hallo</b> {children}
				</p>
			</div>
		);
	}
};

export default Greetings;
