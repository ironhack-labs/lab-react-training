import React from 'react';

function Greetings(props){
	return(

		<div className="card">
			<p className="greet" >	{
			   props.lang === 'de' ? 'Hallo'
			   : props.lang === 'fr' ? 'Bonjour'
			   : props.lang === 'es' ? 'Hola'
			   : 'Hello'
			}{props.children}</p>		
			<p>	</p>
		</div>
		
	)
}

export default Greetings;