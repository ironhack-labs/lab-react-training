import React from 'react'

function Random({ min, max }) {

  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="d-flex flex-row border border-dark m-1 ">
       <p> Randon value between {min} and {max} = {random}</p>
    </div>
  )
}


Random.defaultProps = {
  min: '',
  max: '',
};


export default Random