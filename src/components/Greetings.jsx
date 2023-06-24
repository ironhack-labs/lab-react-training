import React from 'react';

function Greetings(props) {
  //   console.log(props);

  return (
    <div className="greetings">
      <p>
        {' '}
        {props.lang === 'de'
          ? 'Hallo'
          : props.lang === 'en'
          ? 'Hi'
          : props.lang === 'es'
          ? 'Hola'
          : props.lang === 'fr'
          ? 'Bonjour'
          : 'Bonan tagon'}{' '}
        {props.children}
      </p>
    </div>
  );
}

export default Greetings;
