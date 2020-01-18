import React from "react";
import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {
	const numbers = [];
	for (let i = 0; i < limit; i++) {
    
    i % 2 === 0 ?   numbers.push({number: i, color: "red"}): numbers.push({number: i , color: "white"})
	}
	return (
		<div className="NumberTable m-5">
			<ul>
				{numbers.map((e, i) => {
					return <li key={i} className="" style={{backgroundColor: e.color}}>{e.number}</li>;
				})}
			</ul>
		</div>
	);
};

export default NumbersTable;
