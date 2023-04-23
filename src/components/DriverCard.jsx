import React from 'react';

const DriveCard = (props) => {
  const { name, rating, img, car } = props;

  const roundRating = Number(Math.round(rating));

  const emptyStarPath = '/assets/images/star.svg';
  const filledStarPath = './assets/images/star-filled.svg';

  return (
    <div className="container border border-light m-3 w-50 rounded bg-primary text-light">
      <div className="row">
      <div className='col'>
        <img
          src={img}
          alt={name}
          style={{ height: '100px'}}
          className="rounded-circle mx-auto"
        />
        </div>
        <div className="col my-2 align-items-center d-flex flex-column justify-content-center">
          <h3 className='fw-bold'>{name}</h3>
          <p style={{filter:'invert(1)'}}>{roundRating >= 1 ? <img src={filledStarPath} alt="emptyStar" /> : <img src={emptyStarPath} alt="emptyStar" />}
              {roundRating >= 2 ? <img src={filledStarPath} alt="StarRating" /> : <img src={emptyStarPath} alt="emptyStar" />}
              {roundRating >= 3 ? <img src={filledStarPath} alt="StarRating" /> : <img src={emptyStarPath} alt="emptyStar" />}
              {roundRating >= 4 ? <img src={filledStarPath} alt="StarRating" /> : <img src={emptyStarPath} alt="emptyStar" />}
              {roundRating >= 5 ? <img src={filledStarPath} alt="StarRating" /> : <img src={emptyStarPath} alt="emptyStar" />}</p>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriveCard;
