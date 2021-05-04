import React from 'react';
import './index.css'

const Greetings = (props) => {
  if (props.lang === 'de') {
    return (
      <div className="box">
        <h3>Hallo {props.children}</h3>
      </div>
    )
  }
  if (props.lang === 'fr') {
    return <div className="box">
      <h3>Bonjour {props.children}</h3>
    </div>
  }
  if (props.lang === 'en') {
    return <div className="box">
      <h3>Hello {props.children}</h3>
    </div>
  }
  if (props.lang === 'fr') {
    return <div className="box">
      <h3>Hola {props.children}</h3>
    </div>
  }
}

export default Greetings;