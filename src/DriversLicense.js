import Rating from './Rating';

import './DriversLicense.css';

const DriversLicense = ({name, rating, img, car}) => {
    return (
      <article className="DriversLicense">
        <div className="DriversLicense_img__wrapper">
            <img src={img} alt="driver" />
        </div>
        <div className="DriversLicense_body__wrapper">
          <h5>{name}</h5>
          <Rating style={{color: "white"}} className="DriversLicense_rating" >{rating}</Rating>
          <p><span>{car.model} - {car.licensePlate}</span></p>
        </div>
      </article>
    );
}
 
export default DriversLicense;