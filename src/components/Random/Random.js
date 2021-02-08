import React from 'react';

function Random({min, max}){
  let random = Math.floor(Math.random() * max) + min
  return(
    <article className='container-row'>
      <p>
        <span>Random value between {min} and {max} =&gt; {random}</span>
      </p>
    </article>
  )
}

export default Random