import React from 'react';

const Greetings = (props) => {
let {lang} = props;
let greet = (lang) => 
lang === 'es' ? 'Hola'
: lang === 'en' ? 'Hello'
: lang === 'fr' ? 'Bonjour'
: 'Hallo' 
let greetings = greet(lang);
return(
<div className = 'Greetings'>
<b> {greetings} 
{props.children} </b>
</div>
)

};

export default Greetings;