/* eslint-disable react/prop-types */
function Greetings( { lang, children } ) {
	return (
		<div className="greetings">
			<p lang={lang}>{children}</p>
		</div>
	);
}

export default Greetings;
