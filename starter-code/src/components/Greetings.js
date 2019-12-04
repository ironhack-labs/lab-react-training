import React from "react";

const Greetings = (props) => {
	return (
		<div className="border">
			<p className="greetings" >	{
			props.lang === 'de' ? 'Hallo'
			: props.lang === 'fr' ? 'Bonjour'
			: props.lang === 'es' ? 'Hola'
			: 'Hello'
			
			}{props.children}</p>		
			<p>	</p>
		</div>
		)
};


export default Greetings;