import React, { useState, useCallback } from 'react';

const Buttons = () => {
	const [ amount, setAmount ] = useState(0);
	const handlePlus = useCallback(
		() => {
			setAmount(amount + 1);
		},
		[ amount ]
	);
	const handleMinus = useCallback(
		() => {
			if (amount > 0) {
				setAmount(amount - 1);
			}
		},
		[ amount ]
	);

	return (
		<div>
			<button onClick={handlePlus}>+</button>
			<p>{amount}</p>
			<button onClick={handleMinus}>-</button>
		</div>
	);
};
export default Buttons;
