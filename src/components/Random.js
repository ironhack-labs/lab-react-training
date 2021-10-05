import React from 'react'

function Random({min, max}) {
    let random = Math.round(Math.random() * (max-min) + min);
   
    return (
        <div>
              <h5>
              Random value {min} and {max} {`=>`} {random}
              </h5>
        </div>
    );
}
export default Random