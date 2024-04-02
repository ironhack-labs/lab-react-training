import React from 'react';
import './Greetings.css';

function Greetings({ lang, children }) {
  return (
    <div className="border">
        <h5 key={lang}>{children}</h5>
    </div>
  )
}

export default Greetings