import React from 'react';
import P from 'prop-types';


const Greetings = ({lang, children})=>{
  return(
    <div className='greetings-container' style={{border: '1px solid black', padding:'10px'}}>
      <h4 lang={lang}>{children}</h4>
    </div>
  )
}

export default Greetings;