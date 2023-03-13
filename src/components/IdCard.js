import React from 'react'

function IdCard({ lastName, firstName, img, gender, height, birth }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (

    <div className="card m-3">
      <div className="row g-0">
        <div className="col-2" style={{maxWidth:"200px"}}>
          <img src={img} className="img-fluid rounded-start float-start" alt="..." style={{ maxWidth: "200px" }}/>
        </div>
        <div className="col-10">
          <div className="card-body text-start">
            <ul className='p-0'>
              <li><b>First name: </b>{lastName}</li>
              <li><b>Last name: </b>{firstName}</li>
              <li><b>Gender: </b>{gender}</li>
              <li><b>Height: </b>{height}m</li>
              <li><b>Birth: </b>{birth.toLocaleDateString("en-US", options)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdCard