import React from 'react';
import profiles from '../data/berlin.json';

function FacebookSimple(props) {
  return (
    <div>
      <div class="card mb-3  " style={{ maxWidth: '540px' }}>
        <div class="row g-0 ">
          <div class="col-md-4">
            <img src={profiles.img} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                <strong>FirstName: </strong>
                {profiles.firstName} <br />
                <strong>LastName: </strong>
                {profiles.lastName} <br />
                <strong>Country: </strong>
                {profiles.country} <br />
                <strong>Type: </strong>
                {profiles.type} <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookSimple;
