import React from 'react';

const Greeting = (props) => {
  const { lang } = props;
  return (
    <div className='card'>
      <h1>
        {lang === 'fr' && <span>Bonjour </span>}
        {lang === 'en' && <span>Hello </span>}
        {lang === 'de' && <span>Hallo </span>}
        {lang === 'es' && <span>Hola </span>}
        {props.children}
      </h1>
    </div>
  )
}

export default Greeting;
