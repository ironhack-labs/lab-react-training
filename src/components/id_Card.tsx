import React from 'react';
import './App.css';
interface prop {
  last_name: string;
  first_name: string;
  gender: string;
  height: number;
  birth: Date;
  picture: string;
}

function Cards({
  last_name,
  first_name,
  gender,
  birth,
  height,
  picture,
}: prop) {
  let now = new Date(birth);
  let day = now.toLocaleDateString('en-us', { weekday: 'long' });
  let month = now.toLocaleDateString('en-us', { month: 'short' });
  let date = now.toLocaleDateString('en-us', { day: 'numeric' });
  let year = now.toLocaleDateString('en-us', { year: 'numeric' });
  let formattedDate = `${day} ${month} ${date} ${year}`;

  return (
    <>
      <div className="card border-black shadow mb-3" id="laiba">
        <div className="row g-0">
          <div className="col">
            <img src={picture} className="img-fluid" id="l" alt={picture} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">First Name: {first_name}</p>
              <p className="card-text">Last Name: {last_name}</p>
              <p className="card-text">Gender: {gender}</p>
              <p className="card-text">Height: {height}m</p>
              <p className="card-text">Birth: {formattedDate}</p>

              {/* <p className="card-text">{picture}</p> */}
              <p className="card-text">
                <small className="text-body-secondary"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
