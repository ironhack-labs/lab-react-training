import React from 'react'

function Random(props) {
    const { min, max} = props;

const randomI = (min, max) => {
    return Math.floor(Math.random()* (max - min + 1)) + min;
};




  return (
    <div className='Random'>
<p>
Random value {min} and {max} is {randomI(min, max)}
</p>
    </div>
  )
}

export default Random