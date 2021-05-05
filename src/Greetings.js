import React from 'react';
import './index.css'

const Greetings = (props) => {
  const greeting = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola',
    fr: 'Salut'
  };
  return (
    <>
      <div className="greetings-box">
        { greeting[props.lang] } { props.children }
      </div>
    </>
  )
}
export default Greetings;