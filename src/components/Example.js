import React from 'react';
import { useState } from 'react';
import './Example.css'

function Example({ title, children }) {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className='example'>
      <h1 onClick={() => toggle()}>
        {title}
        { show === true ? <button>Hide</button> : <button>Show</button> }
      </h1>
      {show === true ? children : <></>}
    </div>
  );
}

export default Example;
